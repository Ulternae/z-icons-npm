import React from 'react';

export interface BruLinuxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLinux(props: BruLinuxProps): React.ReactElement;
export default BruLinux;
