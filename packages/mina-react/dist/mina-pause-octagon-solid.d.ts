import React from 'react';

export interface MinaPauseOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseOctagonSolid(props: MinaPauseOctagonSolidProps): React.ReactElement;
export default MinaPauseOctagonSolid;
