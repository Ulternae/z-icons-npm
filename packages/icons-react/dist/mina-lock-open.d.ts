import React from 'react';

export interface MinaLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockOpen: React.FC<MinaLockOpenProps>;
export default MinaLockOpen;
