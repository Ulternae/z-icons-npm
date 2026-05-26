import React from 'react';

export interface LanKitchenSetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKitchenSetRegular: React.FC<LanKitchenSetRegularProps>;
export default LanKitchenSetRegular;
