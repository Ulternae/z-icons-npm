import React from 'react';

export interface CoreTrophyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrophy: React.FC<CoreTrophyProps>;
export default CoreTrophy;
