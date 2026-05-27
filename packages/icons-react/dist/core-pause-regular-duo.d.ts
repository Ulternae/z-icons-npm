import React from 'react';

export interface CorePauseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePauseRegularDuo: React.FC<CorePauseRegularDuoProps>;
export default CorePauseRegularDuo;
