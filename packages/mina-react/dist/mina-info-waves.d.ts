import React from 'react';

export interface MinaInfoWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoWaves(props: MinaInfoWavesProps): React.ReactElement;
export default MinaInfoWaves;
