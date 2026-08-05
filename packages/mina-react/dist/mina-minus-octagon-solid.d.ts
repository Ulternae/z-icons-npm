import React from 'react';

export interface MinaMinusOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusOctagonSolid(props: MinaMinusOctagonSolidProps): React.ReactElement;
export default MinaMinusOctagonSolid;
