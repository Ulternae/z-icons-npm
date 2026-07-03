import React from 'react';

export interface BruIoxhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruIoxhost(props: BruIoxhostProps): React.ReactElement;
export default BruIoxhost;
