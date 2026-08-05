import React from 'react';

export interface CoreCalendarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCalendarRegularDuo(props: CoreCalendarRegularDuoProps): React.ReactElement;
export default CoreCalendarRegularDuo;
