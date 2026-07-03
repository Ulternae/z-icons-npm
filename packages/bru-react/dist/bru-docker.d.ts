import React from 'react';

export interface BruDockerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDocker(props: BruDockerProps): React.ReactElement;
export default BruDocker;
