import React from 'react';

export interface MinaTwoWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoWaves(props: MinaTwoWavesProps): React.ReactElement;
export default MinaTwoWaves;
