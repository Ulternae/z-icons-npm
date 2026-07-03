import React from 'react';

export interface BruRedRiverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRedRiver(props: BruRedRiverProps): React.ReactElement;
export default BruRedRiver;
