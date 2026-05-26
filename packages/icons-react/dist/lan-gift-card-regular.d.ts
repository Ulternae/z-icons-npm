import React from 'react';

export interface LanGiftCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftCardRegular: React.FC<LanGiftCardRegularProps>;
export default LanGiftCardRegular;
