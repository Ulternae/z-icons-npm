import React from 'react';

export interface LanFileWordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWord: React.FC<LanFileWordProps>;
export default LanFileWord;
