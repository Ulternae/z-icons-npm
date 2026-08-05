import React from 'react';

export interface MinaStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStore(props: MinaStoreProps): React.ReactElement;
export default MinaStore;
