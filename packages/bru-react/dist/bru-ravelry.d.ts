import React from 'react';

export interface BruRavelryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRavelry(props: BruRavelryProps): React.ReactElement;
export default BruRavelry;
