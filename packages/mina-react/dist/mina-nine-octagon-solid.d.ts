import React from 'react';

export interface MinaNineOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineOctagonSolid(props: MinaNineOctagonSolidProps): React.ReactElement;
export default MinaNineOctagonSolid;
