import React from 'react';

export interface LanDiagramNestedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNestedRegular(props: LanDiagramNestedRegularProps): React.ReactElement;
export default LanDiagramNestedRegular;
