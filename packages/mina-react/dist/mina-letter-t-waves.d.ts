import React from 'react';

export interface MinaLetterTWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTWaves(props: MinaLetterTWavesProps): React.ReactElement;
export default MinaLetterTWaves;
