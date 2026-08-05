import React from 'react';

export interface MinaHeartOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartOctagonSolid(props: MinaHeartOctagonSolidProps): React.ReactElement;
export default MinaHeartOctagonSolid;
