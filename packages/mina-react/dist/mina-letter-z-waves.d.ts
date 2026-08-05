import React from 'react';

export interface MinaLetterZWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZWaves(props: MinaLetterZWavesProps): React.ReactElement;
export default MinaLetterZWaves;
