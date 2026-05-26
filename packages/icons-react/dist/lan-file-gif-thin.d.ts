import React from 'react';

export interface LanFileGifThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileGifThin: React.FC<LanFileGifThinProps>;
export default LanFileGifThin;
