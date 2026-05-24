import React from 'react';

export interface BruDeploydogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDeploydog: React.FC<BruDeploydogProps>;
export default BruDeploydog;
