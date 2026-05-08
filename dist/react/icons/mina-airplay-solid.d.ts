import React from 'react';

export interface MinaAirplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAirplaySolid: React.FC<MinaAirplaySolidProps>;
export default MinaAirplaySolid;
