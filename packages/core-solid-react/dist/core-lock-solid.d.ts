import React from 'react';

export interface CoreLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLockSolid(props: CoreLockSolidProps): React.ReactElement;
export default CoreLockSolid;
