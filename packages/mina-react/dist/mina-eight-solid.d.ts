import React from 'react';

export interface MinaEightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightSolid(props: MinaEightSolidProps): React.ReactElement;
export default MinaEightSolid;
