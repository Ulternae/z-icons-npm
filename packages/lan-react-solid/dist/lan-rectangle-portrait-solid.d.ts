import React from 'react';

export interface LanRectanglePortraitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePortraitSolid(props: LanRectanglePortraitSolidProps): React.ReactElement;
export default LanRectanglePortraitSolid;
