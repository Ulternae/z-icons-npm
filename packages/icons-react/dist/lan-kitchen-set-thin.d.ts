import React from 'react';

export interface LanKitchenSetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKitchenSetThin: React.FC<LanKitchenSetThinProps>;
export default LanKitchenSetThin;
