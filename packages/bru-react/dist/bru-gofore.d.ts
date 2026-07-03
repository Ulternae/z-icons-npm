import React from 'react';

export interface BruGoforeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGofore(props: BruGoforeProps): React.ReactElement;
export default BruGofore;
