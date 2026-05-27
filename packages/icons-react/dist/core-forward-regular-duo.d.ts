import React from 'react';

export interface CoreForwardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreForwardRegularDuo: React.FC<CoreForwardRegularDuoProps>;
export default CoreForwardRegularDuo;
