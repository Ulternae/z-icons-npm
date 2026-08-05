import React from 'react';

export interface MinaAsteriskOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskOctagonSolid(props: MinaAsteriskOctagonSolidProps): React.ReactElement;
export default MinaAsteriskOctagonSolid;
