import React from 'react';

export interface CoreNewspaperRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreNewspaperRegularDuo: React.FC<CoreNewspaperRegularDuoProps>;
export default CoreNewspaperRegularDuo;
