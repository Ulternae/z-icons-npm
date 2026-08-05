import React from 'react';

export interface MinaLetterSWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSWaves(props: MinaLetterSWavesProps): React.ReactElement;
export default MinaLetterSWaves;
