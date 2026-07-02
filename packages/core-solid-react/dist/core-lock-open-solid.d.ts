import React from 'react';

export interface CoreLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLockOpenSolid(props: CoreLockOpenSolidProps): React.ReactElement;
export default CoreLockOpenSolid;
