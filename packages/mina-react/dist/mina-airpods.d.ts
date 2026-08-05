import React from 'react';

export interface MinaAirpodsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAirpods(props: MinaAirpodsProps): React.ReactElement;
export default MinaAirpods;
