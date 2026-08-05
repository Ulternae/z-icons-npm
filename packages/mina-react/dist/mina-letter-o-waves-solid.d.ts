import React from 'react';

export interface MinaLetterOWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOWavesSolid(props: MinaLetterOWavesSolidProps): React.ReactElement;
export default MinaLetterOWavesSolid;
