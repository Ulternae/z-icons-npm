import React from 'react';

export interface MinaOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOctagonSolid(props: MinaOctagonSolidProps): React.ReactElement;
export default MinaOctagonSolid;
