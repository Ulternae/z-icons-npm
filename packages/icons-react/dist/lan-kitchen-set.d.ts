import React from 'react';

export interface LanKitchenSetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKitchenSet: React.FC<LanKitchenSetProps>;
export default LanKitchenSet;
