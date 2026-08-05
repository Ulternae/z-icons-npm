import React from 'react';

export interface MinaCheckOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckOctagonSolid(props: MinaCheckOctagonSolidProps): React.ReactElement;
export default MinaCheckOctagonSolid;
