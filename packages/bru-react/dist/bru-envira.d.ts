import React from 'react';

export interface BruEnviraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEnvira(props: BruEnviraProps): React.ReactElement;
export default BruEnvira;
