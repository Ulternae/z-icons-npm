import React from 'react';

export interface CoreCopyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCopyRegularDuo: React.FC<CoreCopyRegularDuoProps>;
export default CoreCopyRegularDuo;
