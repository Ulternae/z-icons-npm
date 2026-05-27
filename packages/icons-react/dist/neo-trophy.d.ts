import React from 'react';

export interface NeoTrophyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrophy: React.FC<NeoTrophyProps>;
export default NeoTrophy;
