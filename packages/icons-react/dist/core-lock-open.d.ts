import React from 'react';

export interface CoreLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLockOpen: React.FC<CoreLockOpenProps>;
export default CoreLockOpen;
