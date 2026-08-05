import React from 'react';

export interface MinaLetterNWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNWaves(props: MinaLetterNWavesProps): React.ReactElement;
export default MinaLetterNWaves;
