import React from 'react';

export interface MinaYenOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenOctagonSolid(props: MinaYenOctagonSolidProps): React.ReactElement;
export default MinaYenOctagonSolid;
