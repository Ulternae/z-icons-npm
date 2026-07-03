import React from 'react';

export interface BruPhoenixSquadronProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPhoenixSquadron(props: BruPhoenixSquadronProps): React.ReactElement;
export default BruPhoenixSquadron;
