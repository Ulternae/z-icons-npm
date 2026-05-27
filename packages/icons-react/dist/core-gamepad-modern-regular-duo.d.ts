import React from 'react';

export interface CoreGamepadModernRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGamepadModernRegularDuo: React.FC<CoreGamepadModernRegularDuoProps>;
export default CoreGamepadModernRegularDuo;
