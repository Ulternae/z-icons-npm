import React from 'react';

export interface BruSteamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSteam(props: BruSteamProps): React.ReactElement;
export default BruSteam;
