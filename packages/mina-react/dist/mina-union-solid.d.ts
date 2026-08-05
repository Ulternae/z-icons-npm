import React from 'react';

export interface MinaUnionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUnionSolid(props: MinaUnionSolidProps): React.ReactElement;
export default MinaUnionSolid;
