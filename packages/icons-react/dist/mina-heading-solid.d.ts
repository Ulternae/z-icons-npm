import React from 'react';

export interface MinaHeadingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingSolid: React.FC<MinaHeadingSolidProps>;
export default MinaHeadingSolid;
