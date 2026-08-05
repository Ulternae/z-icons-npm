import React from 'react';

export interface LanStoreAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreAltSolid(props: LanStoreAltSolidProps): React.ReactElement;
export default LanStoreAltSolid;
