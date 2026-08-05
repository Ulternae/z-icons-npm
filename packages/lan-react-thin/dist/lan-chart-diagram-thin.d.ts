import React from 'react';

export interface LanChartDiagramThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartDiagramThin(props: LanChartDiagramThinProps): React.ReactElement;
export default LanChartDiagramThin;
