import React from 'react';

export interface MinaLetterGWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGWavesSolid(props: MinaLetterGWavesSolidProps): React.ReactElement;
export default MinaLetterGWavesSolid;
