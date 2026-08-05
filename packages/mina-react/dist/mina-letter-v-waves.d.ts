import React from 'react';

export interface MinaLetterVWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVWaves(props: MinaLetterVWavesProps): React.ReactElement;
export default MinaLetterVWaves;
