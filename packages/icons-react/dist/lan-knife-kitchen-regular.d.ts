import React from 'react';

export interface LanKnifeKitchenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKnifeKitchenRegular: React.FC<LanKnifeKitchenRegularProps>;
export default LanKnifeKitchenRegular;
