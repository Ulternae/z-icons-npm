import React from 'react';

export interface LanRectanglePortraitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePortraitThin(props: LanRectanglePortraitThinProps): React.ReactElement;
export default LanRectanglePortraitThin;
