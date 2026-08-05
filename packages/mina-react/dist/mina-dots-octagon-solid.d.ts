import React from 'react';

export interface MinaDotsOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsOctagonSolid(props: MinaDotsOctagonSolidProps): React.ReactElement;
export default MinaDotsOctagonSolid;
