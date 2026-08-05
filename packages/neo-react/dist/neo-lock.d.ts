import React from 'react';

export interface NeoLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLock(props: NeoLockProps): React.ReactElement;
export default NeoLock;
