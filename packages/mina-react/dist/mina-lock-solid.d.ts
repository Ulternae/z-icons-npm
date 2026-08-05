import React from 'react';

export interface MinaLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockSolid(props: MinaLockSolidProps): React.ReactElement;
export default MinaLockSolid;
