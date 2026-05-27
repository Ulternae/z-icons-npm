import React from 'react';

export interface CoreStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStore: React.FC<CoreStoreProps>;
export default CoreStore;
