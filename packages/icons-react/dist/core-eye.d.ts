import React from 'react';

export interface CoreEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEye: React.FC<CoreEyeProps>;
export default CoreEye;
