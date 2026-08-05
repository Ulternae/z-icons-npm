import React from 'react';

export interface MinaLetterQWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQWaves(props: MinaLetterQWavesProps): React.ReactElement;
export default MinaLetterQWaves;
