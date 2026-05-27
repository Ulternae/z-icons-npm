import React from 'react';

export interface CoreCheckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCheckRegularDuo: React.FC<CoreCheckRegularDuoProps>;
export default CoreCheckRegularDuo;
