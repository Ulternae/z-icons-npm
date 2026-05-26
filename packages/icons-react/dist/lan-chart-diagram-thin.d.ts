import React from 'react';

export interface LanChartDiagramThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartDiagramThin: React.FC<LanChartDiagramThinProps>;
export default LanChartDiagramThin;
