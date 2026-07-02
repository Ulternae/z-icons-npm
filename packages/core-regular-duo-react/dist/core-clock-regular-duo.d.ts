import React from 'react';

export interface CoreClockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClockRegularDuo(props: CoreClockRegularDuoProps): React.ReactElement;
export default CoreClockRegularDuo;
