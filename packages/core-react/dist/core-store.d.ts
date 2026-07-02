import React from 'react';

export interface CoreStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStore(props: CoreStoreProps): React.ReactElement;
export default CoreStore;
