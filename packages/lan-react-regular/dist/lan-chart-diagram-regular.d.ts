import React from 'react';

export interface LanChartDiagramRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartDiagramRegular(props: LanChartDiagramRegularProps): React.ReactElement;
export default LanChartDiagramRegular;
