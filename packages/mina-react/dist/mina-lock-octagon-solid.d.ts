import React from 'react';

export interface MinaLockOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockOctagonSolid(props: MinaLockOctagonSolidProps): React.ReactElement;
export default MinaLockOctagonSolid;
