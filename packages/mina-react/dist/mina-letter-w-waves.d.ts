import React from 'react';

export interface MinaLetterWWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWWaves(props: MinaLetterWWavesProps): React.ReactElement;
export default MinaLetterWWaves;
