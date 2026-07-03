import React from 'react';

export interface BruWixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWix(props: BruWixProps): React.ReactElement;
export default BruWix;
