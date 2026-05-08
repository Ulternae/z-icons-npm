import React from 'react';

export interface MinaAeroplaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAeroplane: React.FC<MinaAeroplaneProps>;
export default MinaAeroplane;
