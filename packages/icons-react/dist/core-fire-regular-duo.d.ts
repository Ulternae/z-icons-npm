import React from 'react';

export interface CoreFireRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFireRegularDuo: React.FC<CoreFireRegularDuoProps>;
export default CoreFireRegularDuo;
