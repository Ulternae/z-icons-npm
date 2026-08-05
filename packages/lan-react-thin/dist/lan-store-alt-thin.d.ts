import React from 'react';

export interface LanStoreAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreAltThin(props: LanStoreAltThinProps): React.ReactElement;
export default LanStoreAltThin;
