import React from 'react';

export interface MinaLetterVWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVWavesSolid: React.FC<MinaLetterVWavesSolidProps>;
export default MinaLetterVWavesSolid;
