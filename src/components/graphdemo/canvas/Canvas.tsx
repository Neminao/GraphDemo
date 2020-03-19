import React from 'react';

interface GraphData {
    label: string;
    array: GraphItem[]
}

interface GraphItem {
    value: number;
    name?: string;
}

export default class Canvas extends React.Component<{graphData: GraphData[]}, { canvasHeight: number, canvasWidth: number, canvasPadding: number }> {
    constructor(props: any) {
        super(props)
        this.state = {
            canvasHeight: 400,
            canvasWidth: 1000,
            canvasPadding: 20
        }
    }
    canvas = React.createRef<HTMLCanvasElement>();

    componentDidMount() {
        let c: HTMLCanvasElement | null = this.canvas.current;
        //if(c)
        //this.createGrid(c.getContext('2d'));
        let graph: GraphData[] = [
            {
                label: "March",
                array: [
                    {
                        value: 25,
                    },
                    {
                        value: 35
                    },
                    {
                        value: 75
                    }
                ]
            },
            {
                label: "April",
                array: [
                    {
                        value: 25
                    },
                    {
                        value: 205
                    },
                    {
                        value: 75
                    }
                ]
            },
            {
                label: "May",
                array: [
                    {
                        value: 10
                    },
                    {
                        value: 35
                    },
                    {
                        value: 105
                    },
                    {
                        value: 175
                    },
                    {
                        value: 300
                    }
                ]
            },
            {
                label: "June",
                array: [
                    {
                        value: 10
                    },
                    {
                        value: 35
                    },
                    {
                        value: 105
                    },
                    {
                        value: 75
                    },
                    {
                        value: 10
                    },
                    {
                        value: 35
                    },
                    {
                        value: 105
                    },
                    {
                        value: 75
                    },
                ]
            }
        ]
        let colors = [
            "#FFC09F",
            "#81F4E1",
            "#56CBF9",
            "#FF729F",
            "#FFEE93",
            "#EF476F",
            "#FFD166",
            "#06D6A0",
            "#118AB2",
            "#073B4C"
        ]
        if (c) {
            let ctx = c.getContext('2d')
            if (ctx)
                this.drawGraph(this.props.graphData, ctx, colors);
        }

    }

    componentDidUpdate(prevProps: {graphData: GraphData[]}) {
        if (prevProps.graphData !== this.props.graphData) {
          this.refreshCanvas();
        }
    }

    refreshCanvas = () => {
        let colors = [
            "#FFC09F",
            "#81F4E1",
            "#56CBF9",
            "#FF729F",
            "#FFEE93",
            "#EF476F",
            "#FFD166",
            "#06D6A0",
            "#118AB2",
            "#073B4C"
        ]
        let c: HTMLCanvasElement | null = this.canvas.current;
        if (c) {
            let ctx = c.getContext('2d')
            if (ctx) {
                ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);
                this.drawGraph(this.props.graphData, ctx, colors);
            }
        }
    }

    createGrid = (ctx: CanvasRenderingContext2D) => {
        let rows = 2;
        let blockSize = 40;
        let columns = 2;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ccc';
        for (let i = 1; i < rows; i++) {
            ctx.beginPath()
            ctx.moveTo(0, i * blockSize);
            ctx.lineTo(columns * blockSize, i * blockSize);
            ctx.stroke();
        }
        for (let i = 1; i < columns; i++) {
            ctx.beginPath()
            ctx.moveTo(i * blockSize, 0);
            ctx.lineTo(i * blockSize, rows * blockSize);
            ctx.stroke();
        }
    }

    numDigits = (x: number): number => {
        return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
    }

    getMaxScaleValue = (max: number): number => {
        let length = this.numDigits(max);
        let k = Math.pow(10, length - 2);
        return Math.ceil(Math.ceil(max / k) / 2) * 2 * k;
    }

    calculateSectionWidth = (sections: number, canvasWidth: number, padding: number): number => {
        return Math.floor(((canvasWidth - 2 * padding) / sections));
    }

    calculateColumnWidth = (columns: number, sectionWidth: number): number => {
        return Math.floor(((sectionWidth * 0.8) / columns));
    }

    calculateMaxValue = (graphData: GraphData[]): number => {
        return Math.max(...graphData.map(gd => Math.max(...gd.array.map((data: GraphItem) => data.value))));
    }

    calculateK = (graphHeight: number, canvasHeight: number): number => {
        return canvasHeight / graphHeight
    }

    drawGraph = (graphData: GraphData[], ctx: CanvasRenderingContext2D, colors: string[]) => {
        //ctx.transform(1, 0, 0, -1, 0, this.canvas.current ? this.canvas.current.height : 1000)
        let sectionWidth: number = this.calculateSectionWidth(graphData.length, this.state.canvasWidth, this.state.canvasPadding);
        let columnWidth: number;
        let maxValue: number = this.calculateMaxValue(graphData);
        let scaleMax: number = this.getMaxScaleValue(maxValue);
        let xCoord: number = this.state.canvasPadding + Math.floor(sectionWidth * 0.2);
        let k: number = this.calculateK(scaleMax, this.state.canvasHeight - this.state.canvasPadding * 2);
        console.log(maxValue)
        console.log(scaleMax)
        graphData.forEach((gd, index) => {
            columnWidth = this.calculateColumnWidth(gd.array.length, sectionWidth);
            this.centerTextOnCanvas(ctx, gd.label, xCoord, this.state.canvasHeight - this.state.canvasPadding + 15, sectionWidth)
            gd.array.forEach((data: GraphItem, i: number) => {
                this.updateCanvas(ctx, colors[i], columnWidth, data.value, xCoord, k)
                xCoord += columnWidth;
            })

            xCoord += Math.floor(sectionWidth * 0.1);
        })
    }

    centerTextOnCanvas = (ctx: CanvasRenderingContext2D, txt: string, currentLeft: number, top: number, sectionWidth: number) => {
        let left: number = currentLeft + sectionWidth / 2 - ctx.measureText(txt).width / 2 - sectionWidth * 0.1
        ctx.strokeText(txt, left, top)
    }

    updateCanvas(ctx: CanvasRenderingContext2D, color: string, width: number, height: number, left: number, scale: number) {
        let top = Math.floor(height * scale)
        ctx.fillStyle = color;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.font = "10px Arial";
        ctx.beginPath();
        ctx.fillRect(left, this.state.canvasHeight - this.state.canvasPadding - top, width, top);
        //ctx.rect(left, top, width, height);
        ctx.strokeText(height + "", left, this.state.canvasHeight - this.state.canvasPadding - top)
        //ctx.stroke();
    }

    render() {
        return <canvas ref={this.canvas} id="graphCanvas" width={this.state.canvasWidth} height={this.state.canvasHeight}></canvas>
    }
}