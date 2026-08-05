import React from 'react';

export interface MinaSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSparkles(props: MinaSparklesProps): React.ReactElement;
export default MinaSparkles;
