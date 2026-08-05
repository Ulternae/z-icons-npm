import React from 'react';

export interface MinaLetterJWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJWaves(props: MinaLetterJWavesProps): React.ReactElement;
export default MinaLetterJWaves;
