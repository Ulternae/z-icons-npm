import React from 'react';

export interface MinaOneOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneOctagonSolid(props: MinaOneOctagonSolidProps): React.ReactElement;
export default MinaOneOctagonSolid;
