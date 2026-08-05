import React from 'react';

export interface MinaFourOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourOctagonSolid(props: MinaFourOctagonSolidProps): React.ReactElement;
export default MinaFourOctagonSolid;
