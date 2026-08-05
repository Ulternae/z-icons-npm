import React from 'react';

export interface MinaFiveOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveOctagonSolid(props: MinaFiveOctagonSolidProps): React.ReactElement;
export default MinaFiveOctagonSolid;
