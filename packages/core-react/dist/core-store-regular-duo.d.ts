import React from 'react';

export interface CoreStoreRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStoreRegularDuo(props: CoreStoreRegularDuoProps): React.ReactElement;
export default CoreStoreRegularDuo;
