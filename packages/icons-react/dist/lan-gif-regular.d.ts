import React from 'react';

export interface LanGifRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGifRegular: React.FC<LanGifRegularProps>;
export default LanGifRegular;
