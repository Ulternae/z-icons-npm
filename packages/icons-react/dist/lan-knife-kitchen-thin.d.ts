import React from 'react';

export interface LanKnifeKitchenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKnifeKitchenThin: React.FC<LanKnifeKitchenThinProps>;
export default LanKnifeKitchenThin;
