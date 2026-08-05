import React from 'react';

export interface MinaLetterVWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVWavesSolid(props: MinaLetterVWavesSolidProps): React.ReactElement;
export default MinaLetterVWavesSolid;
