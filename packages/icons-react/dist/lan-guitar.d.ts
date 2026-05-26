import React from 'react';

export interface LanGuitarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitar: React.FC<LanGuitarProps>;
export default LanGuitar;
