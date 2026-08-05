import React from 'react';

export interface LanChartDiagramSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartDiagramSolid(props: LanChartDiagramSolidProps): React.ReactElement;
export default LanChartDiagramSolid;
