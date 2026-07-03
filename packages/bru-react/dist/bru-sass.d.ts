import React from 'react';

export interface BruSassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSass(props: BruSassProps): React.ReactElement;
export default BruSass;
