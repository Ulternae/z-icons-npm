import React from 'react';

export interface MinaBellMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellMinusSolid(props: MinaBellMinusSolidProps): React.ReactElement;
export default MinaBellMinusSolid;
