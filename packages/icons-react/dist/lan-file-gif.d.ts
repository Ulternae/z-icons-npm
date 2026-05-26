import React from 'react';

export interface LanFileGifProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileGif: React.FC<LanFileGifProps>;
export default LanFileGif;
