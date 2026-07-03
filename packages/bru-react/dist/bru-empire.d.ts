import React from 'react';

export interface BruEmpireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEmpire(props: BruEmpireProps): React.ReactElement;
export default BruEmpire;
