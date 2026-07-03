import React from 'react';

export interface BruItunesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruItunes(props: BruItunesProps): React.ReactElement;
export default BruItunes;
