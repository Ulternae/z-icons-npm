import React from 'react';

export interface CorePlayPauseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlayPauseRegularDuo: React.FC<CorePlayPauseRegularDuoProps>;
export default CorePlayPauseRegularDuo;
