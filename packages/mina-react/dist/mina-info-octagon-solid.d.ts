import React from 'react';

export interface MinaInfoOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoOctagonSolid(props: MinaInfoOctagonSolidProps): React.ReactElement;
export default MinaInfoOctagonSolid;
