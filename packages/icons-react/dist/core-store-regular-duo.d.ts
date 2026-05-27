import React from 'react';

export interface CoreStoreRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStoreRegularDuo: React.FC<CoreStoreRegularDuoProps>;
export default CoreStoreRegularDuo;
