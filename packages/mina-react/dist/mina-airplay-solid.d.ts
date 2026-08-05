import React from 'react';

export interface MinaAirplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAirplaySolid(props: MinaAirplaySolidProps): React.ReactElement;
export default MinaAirplaySolid;
