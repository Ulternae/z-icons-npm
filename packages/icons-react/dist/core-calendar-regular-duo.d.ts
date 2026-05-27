import React from 'react';

export interface CoreCalendarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendarRegularDuo: React.FC<CoreCalendarRegularDuoProps>;
export default CoreCalendarRegularDuo;
