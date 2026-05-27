import React from 'react';

export interface CoreCompressRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompressRegularDuo: React.FC<CoreCompressRegularDuoProps>;
export default CoreCompressRegularDuo;
