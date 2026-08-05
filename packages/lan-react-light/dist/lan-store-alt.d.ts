import React from 'react';

export interface LanStoreAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreAlt(props: LanStoreAltProps): React.ReactElement;
export default LanStoreAlt;
