import React from 'react';

export interface LanMosquitoNetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoNetThin(props: LanMosquitoNetThinProps): React.ReactElement;
export default LanMosquitoNetThin;
