import React from 'react';

export interface MinaLightningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLightningSolid: React.FC<MinaLightningSolidProps>;
export default MinaLightningSolid;
