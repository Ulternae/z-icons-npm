import React from 'react';

export interface BruArchLinuxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruArchLinux(props: BruArchLinuxProps): React.ReactElement;
export default BruArchLinux;
