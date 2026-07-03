import React from 'react';

export interface BruIdealProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruIdeal(props: BruIdealProps): React.ReactElement;
export default BruIdeal;
