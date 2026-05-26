import React from 'react';

export interface LanAmpGuitarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpGuitar: React.FC<LanAmpGuitarProps>;
export default LanAmpGuitar;
