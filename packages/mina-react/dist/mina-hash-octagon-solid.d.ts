import React from 'react';

export interface MinaHashOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashOctagonSolid(props: MinaHashOctagonSolidProps): React.ReactElement;
export default MinaHashOctagonSolid;
