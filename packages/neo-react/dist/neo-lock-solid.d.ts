import React from 'react';

export interface NeoLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLockSolid(props: NeoLockSolidProps): React.ReactElement;
export default NeoLockSolid;
