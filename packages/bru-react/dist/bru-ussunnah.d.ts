import React from 'react';

export interface BruUssunnahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUssunnah(props: BruUssunnahProps): React.ReactElement;
export default BruUssunnah;
