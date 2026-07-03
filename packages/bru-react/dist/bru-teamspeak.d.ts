import React from 'react';

export interface BruTeamspeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTeamspeak(props: BruTeamspeakProps): React.ReactElement;
export default BruTeamspeak;
