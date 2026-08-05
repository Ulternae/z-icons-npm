import React from 'react';

export interface MinaMusicOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicOctagonSolid(props: MinaMusicOctagonSolidProps): React.ReactElement;
export default MinaMusicOctagonSolid;
