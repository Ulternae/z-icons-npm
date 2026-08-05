import React from 'react';

export interface MinaUserMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserMinusSolid(props: MinaUserMinusSolidProps): React.ReactElement;
export default MinaUserMinusSolid;
