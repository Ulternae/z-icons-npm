import React from 'react';

export interface LanChartDiagramSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartDiagramSolid: React.FC<LanChartDiagramSolidProps>;
export default LanChartDiagramSolid;
