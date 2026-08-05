import React from 'react';

export interface NeoWandMagicSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWandMagicSparkles(props: NeoWandMagicSparklesProps): React.ReactElement;
export default NeoWandMagicSparkles;
