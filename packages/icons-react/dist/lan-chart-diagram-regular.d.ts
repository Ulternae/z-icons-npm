import React from 'react';

export interface LanChartDiagramRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartDiagramRegular: React.FC<LanChartDiagramRegularProps>;
export default LanChartDiagramRegular;
