import React from 'react';

export interface CoreFilePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilePlusRegularDuo: React.FC<CoreFilePlusRegularDuoProps>;
export default CoreFilePlusRegularDuo;
