import React from 'react';

export interface MinaLetterAWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterAWavesSolid(props: MinaLetterAWavesSolidProps): React.ReactElement;
export default MinaLetterAWavesSolid;
