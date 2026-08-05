import React from 'react';

export interface MinaStopOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopOctagonSolid(props: MinaStopOctagonSolidProps): React.ReactElement;
export default MinaStopOctagonSolid;
