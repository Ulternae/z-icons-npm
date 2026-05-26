import React from 'react';

export interface LanChartDiagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartDiagram: React.FC<LanChartDiagramProps>;
export default LanChartDiagram;
