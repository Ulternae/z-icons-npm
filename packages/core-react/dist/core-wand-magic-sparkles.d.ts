import React from 'react';

export interface CoreWandMagicSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWandMagicSparkles(props: CoreWandMagicSparklesProps): React.ReactElement;
export default CoreWandMagicSparkles;
