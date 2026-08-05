import React from 'react';

export interface MinaForwardOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardOctagonSolid(props: MinaForwardOctagonSolidProps): React.ReactElement;
export default MinaForwardOctagonSolid;
