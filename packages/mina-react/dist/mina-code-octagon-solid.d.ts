import React from 'react';

export interface MinaCodeOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeOctagonSolid(props: MinaCodeOctagonSolidProps): React.ReactElement;
export default MinaCodeOctagonSolid;
