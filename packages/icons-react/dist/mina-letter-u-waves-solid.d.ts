import React from 'react';

export interface MinaLetterUWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUWavesSolid: React.FC<MinaLetterUWavesSolidProps>;
export default MinaLetterUWavesSolid;
