import React from 'react';

export interface NeoCalendarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCalendarRegularDuo(props: NeoCalendarRegularDuoProps): React.ReactElement;
export default NeoCalendarRegularDuo;
