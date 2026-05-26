import React from 'react';

export interface LanKnifeKitchenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKnifeKitchenSolid: React.FC<LanKnifeKitchenSolidProps>;
export default LanKnifeKitchenSolid;
