import React from 'react';

export interface MinaSignalOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalOctagonSolid(props: MinaSignalOctagonSolidProps): React.ReactElement;
export default MinaSignalOctagonSolid;
