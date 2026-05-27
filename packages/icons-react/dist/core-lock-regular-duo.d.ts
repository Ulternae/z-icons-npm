import React from 'react';

export interface CoreLockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLockRegularDuo: React.FC<CoreLockRegularDuoProps>;
export default CoreLockRegularDuo;
