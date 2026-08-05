import React from 'react';

export interface MinaAirpodsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAirpodsSolid(props: MinaAirpodsSolidProps): React.ReactElement;
export default MinaAirpodsSolid;
