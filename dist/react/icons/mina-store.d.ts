import React from 'react';

export interface MinaStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStore: React.FC<MinaStoreProps>;
export default MinaStore;
