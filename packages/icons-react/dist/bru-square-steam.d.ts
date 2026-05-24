import React from 'react';

export interface BruSquareSteamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareSteam: React.FC<BruSquareSteamProps>;
export default BruSquareSteam;
