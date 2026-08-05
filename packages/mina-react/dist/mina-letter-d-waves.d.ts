import React from 'react';

export interface MinaLetterDWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDWaves(props: MinaLetterDWavesProps): React.ReactElement;
export default MinaLetterDWaves;
