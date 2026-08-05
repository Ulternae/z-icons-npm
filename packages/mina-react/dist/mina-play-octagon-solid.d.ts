import React from 'react';

export interface MinaPlayOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayOctagonSolid(props: MinaPlayOctagonSolidProps): React.ReactElement;
export default MinaPlayOctagonSolid;
