import React from 'react';

export interface MinaRewindOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindOctagonSolid(props: MinaRewindOctagonSolidProps): React.ReactElement;
export default MinaRewindOctagonSolid;
