import React from 'react';

export interface MinaLetterRWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRWaves(props: MinaLetterRWavesProps): React.ReactElement;
export default MinaLetterRWaves;
