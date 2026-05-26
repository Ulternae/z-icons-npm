import React from 'react';

export interface LanStoreAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreAltRegular: React.FC<LanStoreAltRegularProps>;
export default LanStoreAltRegular;
