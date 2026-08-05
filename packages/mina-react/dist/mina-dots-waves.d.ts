import React from 'react';

export interface MinaDotsWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsWaves(props: MinaDotsWavesProps): React.ReactElement;
export default MinaDotsWaves;
