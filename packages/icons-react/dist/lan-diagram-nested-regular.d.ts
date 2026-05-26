import React from 'react';

export interface LanDiagramNestedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNestedRegular: React.FC<LanDiagramNestedRegularProps>;
export default LanDiagramNestedRegular;
