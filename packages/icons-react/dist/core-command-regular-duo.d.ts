import React from 'react';

export interface CoreCommandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommandRegularDuo: React.FC<CoreCommandRegularDuoProps>;
export default CoreCommandRegularDuo;
