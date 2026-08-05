import React from 'react';

export interface MinaLetterEWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterEWaves(props: MinaLetterEWavesProps): React.ReactElement;
export default MinaLetterEWaves;
