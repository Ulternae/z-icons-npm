import React from 'react';

export interface BruOctopusDeployProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOctopusDeploy: React.FC<BruOctopusDeployProps>;
export default BruOctopusDeploy;
