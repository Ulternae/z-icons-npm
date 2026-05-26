import React from 'react';

export interface LanRectangleHighDynamicRangeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHighDynamicRange: React.FC<LanRectangleHighDynamicRangeProps>;
export default LanRectangleHighDynamicRange;
