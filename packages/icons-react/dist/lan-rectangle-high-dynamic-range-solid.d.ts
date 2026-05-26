import React from 'react';

export interface LanRectangleHighDynamicRangeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHighDynamicRangeSolid: React.FC<LanRectangleHighDynamicRangeSolidProps>;
export default LanRectangleHighDynamicRangeSolid;
