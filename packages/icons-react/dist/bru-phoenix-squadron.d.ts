import React from 'react';

export interface BruPhoenixSquadronProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPhoenixSquadron: React.FC<BruPhoenixSquadronProps>;
export default BruPhoenixSquadron;
