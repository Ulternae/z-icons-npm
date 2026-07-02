import React from 'react';

export interface CoreWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWifiSolid(props: CoreWifiSolidProps): React.ReactElement;
export default CoreWifiSolid;
