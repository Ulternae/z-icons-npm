import React from 'react';

export interface CoreSkullRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSkullRegularDuo: React.FC<CoreSkullRegularDuoProps>;
export default CoreSkullRegularDuo;
