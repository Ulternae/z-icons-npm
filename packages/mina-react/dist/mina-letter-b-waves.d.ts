import React from 'react';

export interface MinaLetterBWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBWaves(props: MinaLetterBWavesProps): React.ReactElement;
export default MinaLetterBWaves;
