import React from 'react';

export interface LanRectangleNASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNASolid(props: LanRectangleNASolidProps): React.ReactElement;
export default LanRectangleNASolid;
