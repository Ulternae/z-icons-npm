import React from 'react';

export interface NeoCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleXmark: React.FC<NeoCircleXmarkProps>;
export default NeoCircleXmark;
