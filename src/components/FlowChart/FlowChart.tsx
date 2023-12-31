import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './FlowChart.scss'; // 引入样式文件
import ArrowImg from '../../assets/img/arrow.png'


interface FlowchartProps {
    steps: string[];
}

const Flowchart: React.FC<FlowchartProps> = ({ steps }) => {
    return (
        <div className="flowchart">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flowchart-step">
                        <div className="step-index">{index + 1}</div>
                        <ReactMarkdown
                            className="flowchart-box"
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            children={step}
                        />
                    </div>
                    {index < steps.length - 1 && <img width={24} height={24} src={ArrowImg} className="flowchart-arrow" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Flowchart;
