import React from 'react';

export interface BruDeploydogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDeploydog(props: BruDeploydogProps): React.ReactElement;
export default BruDeploydog;
