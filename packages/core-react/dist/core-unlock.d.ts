import React from 'react';

export interface CoreUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUnlock(props: CoreUnlockProps): React.ReactElement;
export default CoreUnlock;
