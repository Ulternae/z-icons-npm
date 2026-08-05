import React from 'react';

export interface MinaLetterPWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPWaves(props: MinaLetterPWavesProps): React.ReactElement;
export default MinaLetterPWaves;
