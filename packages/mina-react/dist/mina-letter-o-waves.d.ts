import React from 'react';

export interface MinaLetterOWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOWaves(props: MinaLetterOWavesProps): React.ReactElement;
export default MinaLetterOWaves;
