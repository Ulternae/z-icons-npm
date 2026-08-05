import React from 'react';

export interface LanMosquitoNetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoNet(props: LanMosquitoNetProps): React.ReactElement;
export default LanMosquitoNet;
