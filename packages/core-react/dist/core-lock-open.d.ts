import React from 'react';

export interface CoreLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLockOpen(props: CoreLockOpenProps): React.ReactElement;
export default CoreLockOpen;
