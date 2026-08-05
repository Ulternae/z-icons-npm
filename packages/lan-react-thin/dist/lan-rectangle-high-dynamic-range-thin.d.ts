import React from 'react';

export interface LanRectangleHighDynamicRangeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHighDynamicRangeThin(props: LanRectangleHighDynamicRangeThinProps): React.ReactElement;
export default LanRectangleHighDynamicRangeThin;
