import React from 'react';

export interface MinaCodeWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeWaves(props: MinaCodeWavesProps): React.ReactElement;
export default MinaCodeWaves;
