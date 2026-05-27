import React from 'react';

export interface NeoBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBox: React.FC<NeoBoxProps>;
export default NeoBox;
