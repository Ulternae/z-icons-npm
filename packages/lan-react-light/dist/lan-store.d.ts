import React from 'react';

export interface LanStoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStore(props: LanStoreProps): React.ReactElement;
export default LanStore;
