import React from 'react';

export interface MinaCannabisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCannabisSolid: React.FC<MinaCannabisSolidProps>;
export default MinaCannabisSolid;
