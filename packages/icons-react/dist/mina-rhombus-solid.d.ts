import React from 'react';

export interface MinaRhombusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRhombusSolid: React.FC<MinaRhombusSolidProps>;
export default MinaRhombusSolid;
