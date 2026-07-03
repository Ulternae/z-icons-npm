import React from 'react';

export interface BruSquareSteamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareSteam(props: BruSquareSteamProps): React.ReactElement;
export default BruSquareSteam;
