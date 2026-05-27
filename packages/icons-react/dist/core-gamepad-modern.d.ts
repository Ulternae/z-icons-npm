import React from 'react';

export interface CoreGamepadModernProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGamepadModern: React.FC<CoreGamepadModernProps>;
export default CoreGamepadModern;
