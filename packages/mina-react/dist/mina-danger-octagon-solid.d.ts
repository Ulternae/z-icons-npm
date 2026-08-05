import React from 'react';

export interface MinaDangerOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerOctagonSolid(props: MinaDangerOctagonSolidProps): React.ReactElement;
export default MinaDangerOctagonSolid;
