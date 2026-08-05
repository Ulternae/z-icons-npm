import React from 'react';

export interface MinaLetterYWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYWaves(props: MinaLetterYWavesProps): React.ReactElement;
export default MinaLetterYWaves;
