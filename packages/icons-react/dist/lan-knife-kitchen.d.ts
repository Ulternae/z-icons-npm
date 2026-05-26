import React from 'react';

export interface LanKnifeKitchenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKnifeKitchen: React.FC<LanKnifeKitchenProps>;
export default LanKnifeKitchen;
