import React from 'react';

export interface CoreFontRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFontRegularDuo: React.FC<CoreFontRegularDuoProps>;
export default CoreFontRegularDuo;
