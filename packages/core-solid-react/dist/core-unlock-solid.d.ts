import React from 'react';

export interface CoreUnlockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUnlockSolid(props: CoreUnlockSolidProps): React.ReactElement;
export default CoreUnlockSolid;
