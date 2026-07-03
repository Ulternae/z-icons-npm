import React from 'react';

export interface BruRedhatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRedhat(props: BruRedhatProps): React.ReactElement;
export default BruRedhat;
