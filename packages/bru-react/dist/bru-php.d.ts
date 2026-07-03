import React from 'react';

export interface BruPhpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPhp(props: BruPhpProps): React.ReactElement;
export default BruPhp;
