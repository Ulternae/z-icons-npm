import React from 'react';

export interface MinaActivitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaActivitySolid(props: MinaActivitySolidProps): React.ReactElement;
export default MinaActivitySolid;
