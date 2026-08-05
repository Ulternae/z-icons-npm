import React from 'react';

export interface MinaLetterFWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFWavesSolid(props: MinaLetterFWavesSolidProps): React.ReactElement;
export default MinaLetterFWavesSolid;
