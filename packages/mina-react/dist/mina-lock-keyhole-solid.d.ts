import React from 'react';

export interface MinaLockKeyholeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockKeyholeSolid(props: MinaLockKeyholeSolidProps): React.ReactElement;
export default MinaLockKeyholeSolid;
