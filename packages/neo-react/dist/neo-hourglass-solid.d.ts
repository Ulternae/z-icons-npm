import React from 'react';

export interface NeoHourglassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHourglassSolid(props: NeoHourglassSolidProps): React.ReactElement;
export default NeoHourglassSolid;
