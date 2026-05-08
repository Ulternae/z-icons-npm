import React from 'react';

export interface MinaLockOpenPasswordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockOpenPassword: React.FC<MinaLockOpenPasswordProps>;
export default MinaLockOpenPassword;
