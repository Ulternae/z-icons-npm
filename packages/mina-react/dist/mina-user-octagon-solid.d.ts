import React from 'react';

export interface MinaUserOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserOctagonSolid(props: MinaUserOctagonSolidProps): React.ReactElement;
export default MinaUserOctagonSolid;
