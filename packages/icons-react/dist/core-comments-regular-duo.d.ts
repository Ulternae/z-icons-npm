import React from 'react';

export interface CoreCommentsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommentsRegularDuo: React.FC<CoreCommentsRegularDuoProps>;
export default CoreCommentsRegularDuo;
