import React from 'react';

export interface NeoLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLockOpen(props: NeoLockOpenProps): React.ReactElement;
export default NeoLockOpen;
