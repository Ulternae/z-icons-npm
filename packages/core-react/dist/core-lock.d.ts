import React from 'react';

export interface CoreLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLock(props: CoreLockProps): React.ReactElement;
export default CoreLock;
