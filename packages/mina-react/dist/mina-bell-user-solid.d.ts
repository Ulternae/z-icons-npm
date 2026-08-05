import React from 'react';

export interface MinaBellUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellUserSolid(props: MinaBellUserSolidProps): React.ReactElement;
export default MinaBellUserSolid;
