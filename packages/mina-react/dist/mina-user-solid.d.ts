import React from 'react';

export interface MinaUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserSolid(props: MinaUserSolidProps): React.ReactElement;
export default MinaUserSolid;
