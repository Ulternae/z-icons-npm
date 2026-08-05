import React from 'react';

export interface MinaLetterXWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXWaves(props: MinaLetterXWavesProps): React.ReactElement;
export default MinaLetterXWaves;
