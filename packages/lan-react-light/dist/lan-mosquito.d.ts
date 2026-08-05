import React from 'react';

export interface LanMosquitoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquito(props: LanMosquitoProps): React.ReactElement;
export default LanMosquito;
