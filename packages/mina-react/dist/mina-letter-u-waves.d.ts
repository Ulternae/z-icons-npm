import React from 'react';

export interface MinaLetterUWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUWaves(props: MinaLetterUWavesProps): React.ReactElement;
export default MinaLetterUWaves;
