import React from 'react';

export interface LanRectangleWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleWideSolid(props: LanRectangleWideSolidProps): React.ReactElement;
export default LanRectangleWideSolid;
