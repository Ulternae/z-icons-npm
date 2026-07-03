import React from 'react';

export interface BruMaxcdnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMaxcdn(props: BruMaxcdnProps): React.ReactElement;
export default BruMaxcdn;
