import React from 'react';

export interface MinaBellPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellPlusSolid(props: MinaBellPlusSolidProps): React.ReactElement;
export default MinaBellPlusSolid;
