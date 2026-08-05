import React from 'react';

export interface MinaEarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEarSolid(props: MinaEarSolidProps): React.ReactElement;
export default MinaEarSolid;
