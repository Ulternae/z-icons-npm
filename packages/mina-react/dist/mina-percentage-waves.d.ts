import React from 'react';

export interface MinaPercentageWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageWaves(props: MinaPercentageWavesProps): React.ReactElement;
export default MinaPercentageWaves;
