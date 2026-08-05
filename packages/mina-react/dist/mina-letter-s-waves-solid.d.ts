import React from 'react';

export interface MinaLetterSWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSWavesSolid(props: MinaLetterSWavesSolidProps): React.ReactElement;
export default MinaLetterSWavesSolid;
