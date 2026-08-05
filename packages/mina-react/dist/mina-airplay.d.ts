import React from 'react';

export interface MinaAirplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAirplay(props: MinaAirplayProps): React.ReactElement;
export default MinaAirplay;
