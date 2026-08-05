import React from 'react';

export interface LanRectanglePortraitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePortrait(props: LanRectanglePortraitProps): React.ReactElement;
export default LanRectanglePortrait;
