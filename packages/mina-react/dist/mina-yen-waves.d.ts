import React from 'react';

export interface MinaYenWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenWaves(props: MinaYenWavesProps): React.ReactElement;
export default MinaYenWaves;
