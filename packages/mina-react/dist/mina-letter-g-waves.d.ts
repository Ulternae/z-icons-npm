import React from 'react';

export interface MinaLetterGWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGWaves(props: MinaLetterGWavesProps): React.ReactElement;
export default MinaLetterGWaves;
