import React from 'react';

export interface MinaDotsVerticalOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalOctagonSolid(props: MinaDotsVerticalOctagonSolidProps): React.ReactElement;
export default MinaDotsVerticalOctagonSolid;
