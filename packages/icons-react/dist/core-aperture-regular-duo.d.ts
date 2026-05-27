import React from 'react';

export interface CoreApertureRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreApertureRegularDuo: React.FC<CoreApertureRegularDuoProps>;
export default CoreApertureRegularDuo;
