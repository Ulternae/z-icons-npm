import React from 'react';

export interface MinaSearchOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchOctagonSolid(props: MinaSearchOctagonSolidProps): React.ReactElement;
export default MinaSearchOctagonSolid;
