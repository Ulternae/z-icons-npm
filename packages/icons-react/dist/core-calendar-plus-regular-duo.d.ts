import React from 'react';

export interface CoreCalendarPlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendarPlusRegularDuo: React.FC<CoreCalendarPlusRegularDuoProps>;
export default CoreCalendarPlusRegularDuo;
