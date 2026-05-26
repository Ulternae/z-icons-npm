import React from 'react';

export interface LanStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStore: React.FC<LanStoreProps>;
export default LanStore;
