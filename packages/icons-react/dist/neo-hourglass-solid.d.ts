import React from 'react';

export interface NeoHourglassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHourglassSolid: React.FC<NeoHourglassSolidProps>;
export default NeoHourglassSolid;
