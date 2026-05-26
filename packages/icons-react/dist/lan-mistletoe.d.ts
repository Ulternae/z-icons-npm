import React from 'react';

export interface LanMistletoeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMistletoe: React.FC<LanMistletoeProps>;
export default LanMistletoe;
