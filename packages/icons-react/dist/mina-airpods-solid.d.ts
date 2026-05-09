import React from 'react';

export interface MinaAirpodsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAirpodsSolid: React.FC<MinaAirpodsSolidProps>;
export default MinaAirpodsSolid;
