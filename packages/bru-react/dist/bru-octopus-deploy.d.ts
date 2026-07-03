import React from 'react';

export interface BruOctopusDeployProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOctopusDeploy(props: BruOctopusDeployProps): React.ReactElement;
export default BruOctopusDeploy;
