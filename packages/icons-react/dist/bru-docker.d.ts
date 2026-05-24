import React from 'react';

export interface BruDockerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDocker: React.FC<BruDockerProps>;
export default BruDocker;
