import React from 'react';

export interface MinaBellOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellOnSolid(props: MinaBellOnSolidProps): React.ReactElement;
export default MinaBellOnSolid;
