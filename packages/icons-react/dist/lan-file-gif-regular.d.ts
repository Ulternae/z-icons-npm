import React from 'react';

export interface LanFileGifRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileGifRegular: React.FC<LanFileGifRegularProps>;
export default LanFileGifRegular;
