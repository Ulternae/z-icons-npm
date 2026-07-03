import React from 'react';

export interface BruThreemaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruThreema(props: BruThreemaProps): React.ReactElement;
export default BruThreema;
