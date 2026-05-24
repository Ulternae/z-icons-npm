import React from 'react';

export interface BruSteamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSteam: React.FC<BruSteamProps>;
export default BruSteam;
