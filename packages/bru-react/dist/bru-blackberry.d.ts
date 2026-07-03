import React from 'react';

export interface BruBlackberryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBlackberry(props: BruBlackberryProps): React.ReactElement;
export default BruBlackberry;
