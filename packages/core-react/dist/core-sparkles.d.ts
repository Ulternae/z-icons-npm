import React from 'react';

export interface CoreSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSparkles(props: CoreSparklesProps): React.ReactElement;
export default CoreSparkles;
