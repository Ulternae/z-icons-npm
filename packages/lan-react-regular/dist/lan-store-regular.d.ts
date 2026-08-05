import React from 'react';

export interface LanStoreRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreRegular(props: LanStoreRegularProps): React.ReactElement;
export default LanStoreRegular;
