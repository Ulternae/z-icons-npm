import React from 'react';

export interface CoreHourglassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHourglassRegularDuo(props: CoreHourglassRegularDuoProps): React.ReactElement;
export default CoreHourglassRegularDuo;
