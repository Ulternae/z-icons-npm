import React from 'react';

export interface MinaLetterAWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterAWaves(props: MinaLetterAWavesProps): React.ReactElement;
export default MinaLetterAWaves;
