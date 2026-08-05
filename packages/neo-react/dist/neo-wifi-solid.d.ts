import React from 'react';

export interface NeoWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWifiSolid(props: NeoWifiSolidProps): React.ReactElement;
export default NeoWifiSolid;
