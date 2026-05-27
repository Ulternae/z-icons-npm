import React from 'react';

export interface CoreFilesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilesRegularDuo: React.FC<CoreFilesRegularDuoProps>;
export default CoreFilesRegularDuo;
