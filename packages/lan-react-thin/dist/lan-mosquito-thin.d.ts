import React from 'react';

export interface LanMosquitoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoThin(props: LanMosquitoThinProps): React.ReactElement;
export default LanMosquitoThin;
