import React from 'react';

export interface NeoWifiWeakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWifiWeakSolid(props: NeoWifiWeakSolidProps): React.ReactElement;
export default NeoWifiWeakSolid;
