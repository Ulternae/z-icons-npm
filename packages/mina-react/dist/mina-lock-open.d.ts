import React from 'react';

export interface MinaLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockOpen(props: MinaLockOpenProps): React.ReactElement;
export default MinaLockOpen;
