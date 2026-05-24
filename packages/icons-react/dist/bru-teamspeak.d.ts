import React from 'react';

export interface BruTeamspeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTeamspeak: React.FC<BruTeamspeakProps>;
export default BruTeamspeak;
