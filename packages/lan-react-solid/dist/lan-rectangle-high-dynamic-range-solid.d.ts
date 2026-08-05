import React from 'react';

export interface LanRectangleHighDynamicRangeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHighDynamicRangeSolid(props: LanRectangleHighDynamicRangeSolidProps): React.ReactElement;
export default LanRectangleHighDynamicRangeSolid;
