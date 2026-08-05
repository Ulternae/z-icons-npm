import React from 'react';

export interface MinaLetterBWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBWavesSolid(props: MinaLetterBWavesSolidProps): React.ReactElement;
export default MinaLetterBWavesSolid;
