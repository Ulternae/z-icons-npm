import React from 'react';

export interface LanStoreRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreRegular: React.FC<LanStoreRegularProps>;
export default LanStoreRegular;
