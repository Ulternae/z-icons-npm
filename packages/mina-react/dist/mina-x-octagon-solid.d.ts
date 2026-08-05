import React from 'react';

export interface MinaXOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXOctagonSolid(props: MinaXOctagonSolidProps): React.ReactElement;
export default MinaXOctagonSolid;
