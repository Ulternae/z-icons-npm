import React from 'react';

export interface MinaBitcoinWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinWaves(props: MinaBitcoinWavesProps): React.ReactElement;
export default MinaBitcoinWaves;
