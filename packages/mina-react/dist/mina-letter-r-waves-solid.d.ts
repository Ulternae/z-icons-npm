import React from 'react';

export interface MinaLetterRWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRWavesSolid(props: MinaLetterRWavesSolidProps): React.ReactElement;
export default MinaLetterRWavesSolid;
