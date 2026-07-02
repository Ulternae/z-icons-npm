import React from 'react';

export interface CoreSparklesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSparklesRegularDuo(props: CoreSparklesRegularDuoProps): React.ReactElement;
export default CoreSparklesRegularDuo;
