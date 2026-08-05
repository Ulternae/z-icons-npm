import React from 'react';

export interface NeoWifiWeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWifiWeak(props: NeoWifiWeakProps): React.ReactElement;
export default NeoWifiWeak;
