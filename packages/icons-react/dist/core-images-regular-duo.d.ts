import React from 'react';

export interface CoreImagesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreImagesRegularDuo: React.FC<CoreImagesRegularDuoProps>;
export default CoreImagesRegularDuo;
