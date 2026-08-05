import React from 'react';

export interface NeoLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLockOpenSolid(props: NeoLockOpenSolidProps): React.ReactElement;
export default NeoLockOpenSolid;
