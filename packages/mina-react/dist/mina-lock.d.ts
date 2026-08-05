import React from 'react';

export interface MinaLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLock(props: MinaLockProps): React.ReactElement;
export default MinaLock;
