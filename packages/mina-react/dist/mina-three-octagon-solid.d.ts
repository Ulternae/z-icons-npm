import React from 'react';

export interface MinaThreeOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeOctagonSolid(props: MinaThreeOctagonSolidProps): React.ReactElement;
export default MinaThreeOctagonSolid;
