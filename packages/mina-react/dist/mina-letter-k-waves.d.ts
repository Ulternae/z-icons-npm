import React from 'react';

export interface MinaLetterKWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKWaves(props: MinaLetterKWavesProps): React.ReactElement;
export default MinaLetterKWaves;
