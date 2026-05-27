import React from 'react';

export interface CoreFloppyDiskRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFloppyDiskRegularDuo: React.FC<CoreFloppyDiskRegularDuoProps>;
export default CoreFloppyDiskRegularDuo;
