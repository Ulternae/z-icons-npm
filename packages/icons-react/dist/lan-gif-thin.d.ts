import React from 'react';

export interface LanGifThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGifThin: React.FC<LanGifThinProps>;
export default LanGifThin;
