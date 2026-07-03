import React from 'react';

export interface BruPhoenixFrameworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPhoenixFramework(props: BruPhoenixFrameworkProps): React.ReactElement;
export default BruPhoenixFramework;
