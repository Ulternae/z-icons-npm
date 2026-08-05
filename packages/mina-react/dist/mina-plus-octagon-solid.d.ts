import React from 'react';

export interface MinaPlusOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusOctagonSolid(props: MinaPlusOctagonSolidProps): React.ReactElement;
export default MinaPlusOctagonSolid;
