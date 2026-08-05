import React from 'react';

export interface LanOctopusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctopus(props: LanOctopusProps): React.ReactElement;
export default LanOctopus;
