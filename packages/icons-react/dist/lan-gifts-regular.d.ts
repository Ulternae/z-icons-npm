import React from 'react';

export interface LanGiftsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftsRegular: React.FC<LanGiftsRegularProps>;
export default LanGiftsRegular;
