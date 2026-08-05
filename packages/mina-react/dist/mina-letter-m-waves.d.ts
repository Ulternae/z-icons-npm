import React from 'react';

export interface MinaLetterMWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMWaves(props: MinaLetterMWavesProps): React.ReactElement;
export default MinaLetterMWaves;
