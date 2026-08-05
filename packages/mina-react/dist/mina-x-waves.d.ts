import React from 'react';

export interface MinaXWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXWaves(props: MinaXWavesProps): React.ReactElement;
export default MinaXWaves;
