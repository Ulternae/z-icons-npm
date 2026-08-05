import React from 'react';

export interface MinaUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUsersSolid(props: MinaUsersSolidProps): React.ReactElement;
export default MinaUsersSolid;
