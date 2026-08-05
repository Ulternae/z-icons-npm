import React from 'react';

export interface MinaLetterIWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterIWaves(props: MinaLetterIWavesProps): React.ReactElement;
export default MinaLetterIWaves;
