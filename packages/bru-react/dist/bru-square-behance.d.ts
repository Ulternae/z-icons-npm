import React from 'react';

export interface BruSquareBehanceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareBehance(props: BruSquareBehanceProps): React.ReactElement;
export default BruSquareBehance;
