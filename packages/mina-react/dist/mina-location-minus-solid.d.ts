import React from 'react';

export interface MinaLocationMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationMinusSolid(props: MinaLocationMinusSolidProps): React.ReactElement;
export default MinaLocationMinusSolid;
