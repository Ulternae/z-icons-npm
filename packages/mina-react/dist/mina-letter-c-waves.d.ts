import React from 'react';

export interface MinaLetterCWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCWaves(props: MinaLetterCWavesProps): React.ReactElement;
export default MinaLetterCWaves;
