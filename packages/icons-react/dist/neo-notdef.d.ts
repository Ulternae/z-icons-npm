import React from 'react';

export interface NeoNotdefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoNotdef: React.FC<NeoNotdefProps>;
export default NeoNotdef;
