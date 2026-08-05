import React from 'react';

export interface MinaLetterFWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFWaves(props: MinaLetterFWavesProps): React.ReactElement;
export default MinaLetterFWaves;
