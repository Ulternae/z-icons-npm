import React from 'react';

export interface MinaBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellSolid(props: MinaBellSolidProps): React.ReactElement;
export default MinaBellSolid;
