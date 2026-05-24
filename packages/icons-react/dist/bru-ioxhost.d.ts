import React from 'react';

export interface BruIoxhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruIoxhost: React.FC<BruIoxhostProps>;
export default BruIoxhost;
