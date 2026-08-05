import React from 'react';

export interface MinaTwoOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoOctagonSolid(props: MinaTwoOctagonSolidProps): React.ReactElement;
export default MinaTwoOctagonSolid;
