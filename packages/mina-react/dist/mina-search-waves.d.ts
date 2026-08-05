import React from 'react';

export interface MinaSearchWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchWaves(props: MinaSearchWavesProps): React.ReactElement;
export default MinaSearchWaves;
