import React from 'react';

export interface BruShoelaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruShoelace(props: BruShoelaceProps): React.ReactElement;
export default BruShoelace;
