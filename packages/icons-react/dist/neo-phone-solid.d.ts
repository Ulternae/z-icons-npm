import React from 'react';

export interface NeoPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPhoneSolid: React.FC<NeoPhoneSolidProps>;
export default NeoPhoneSolid;
