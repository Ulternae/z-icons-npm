import React from 'react';

export interface NeoSparklesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSparklesRegularDuo(props: NeoSparklesRegularDuoProps): React.ReactElement;
export default NeoSparklesRegularDuo;
