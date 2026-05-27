import React from 'react';

export interface NeoCalendarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCalendarRegularDuo: React.FC<NeoCalendarRegularDuoProps>;
export default NeoCalendarRegularDuo;
