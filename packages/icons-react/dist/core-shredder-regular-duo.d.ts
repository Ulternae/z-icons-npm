import React from 'react';

export interface CoreShredderRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShredderRegularDuo: React.FC<CoreShredderRegularDuoProps>;
export default CoreShredderRegularDuo;
