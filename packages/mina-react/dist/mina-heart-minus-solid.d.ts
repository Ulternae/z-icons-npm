import React from 'react';

export interface MinaHeartMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartMinusSolid(props: MinaHeartMinusSolidProps): React.ReactElement;
export default MinaHeartMinusSolid;
