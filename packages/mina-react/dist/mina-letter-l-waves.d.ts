import React from 'react';

export interface MinaLetterLWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLWaves(props: MinaLetterLWavesProps): React.ReactElement;
export default MinaLetterLWaves;
