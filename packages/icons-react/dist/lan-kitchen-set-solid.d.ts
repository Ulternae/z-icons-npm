import React from 'react';

export interface LanKitchenSetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKitchenSetSolid: React.FC<LanKitchenSetSolidProps>;
export default LanKitchenSetSolid;
