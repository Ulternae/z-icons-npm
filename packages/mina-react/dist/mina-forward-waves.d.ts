import React from 'react';

export interface MinaForwardWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardWaves(props: MinaForwardWavesProps): React.ReactElement;
export default MinaForwardWaves;
