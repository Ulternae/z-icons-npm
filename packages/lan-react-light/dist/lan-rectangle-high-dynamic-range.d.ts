import React from 'react';

export interface LanRectangleHighDynamicRangeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHighDynamicRange(props: LanRectangleHighDynamicRangeProps): React.ReactElement;
export default LanRectangleHighDynamicRange;
