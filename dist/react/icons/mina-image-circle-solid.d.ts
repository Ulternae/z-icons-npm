import React from 'react';

export interface MinaImageCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaImageCircleSolid: React.FC<MinaImageCircleSolidProps>;
export default MinaImageCircleSolid;
