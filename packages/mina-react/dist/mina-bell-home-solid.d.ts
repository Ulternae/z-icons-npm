import React from 'react';

export interface MinaBellHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellHomeSolid(props: MinaBellHomeSolidProps): React.ReactElement;
export default MinaBellHomeSolid;
