import React from 'react';

export interface MinaLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockOpenSolid(props: MinaLockOpenSolidProps): React.ReactElement;
export default MinaLockOpenSolid;
