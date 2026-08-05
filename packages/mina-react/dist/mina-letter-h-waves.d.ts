import React from 'react';

export interface MinaLetterHWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHWaves(props: MinaLetterHWavesProps): React.ReactElement;
export default MinaLetterHWaves;
