import React from 'react';

export interface BruTypo3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTypo3(props: BruTypo3Props): React.ReactElement;
export default BruTypo3;
