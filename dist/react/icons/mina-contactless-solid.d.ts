import React from 'react';

export interface MinaContactlessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaContactlessSolid: React.FC<MinaContactlessSolidProps>;
export default MinaContactlessSolid;
