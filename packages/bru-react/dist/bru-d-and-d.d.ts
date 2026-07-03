import React from 'react';

export interface BruDAndDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDAndD(props: BruDAndDProps): React.ReactElement;
export default BruDAndD;
