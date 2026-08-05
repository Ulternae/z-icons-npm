import React from 'react';

export interface LanChartDiagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartDiagram(props: LanChartDiagramProps): React.ReactElement;
export default LanChartDiagram;
