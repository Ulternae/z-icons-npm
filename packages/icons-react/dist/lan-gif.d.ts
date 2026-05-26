import React from 'react';

export interface LanGifProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGif: React.FC<LanGifProps>;
export default LanGif;
