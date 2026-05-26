import React from 'react';

export interface LanRectangleNASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNASolid: React.FC<LanRectangleNASolidProps>;
export default LanRectangleNASolid;
