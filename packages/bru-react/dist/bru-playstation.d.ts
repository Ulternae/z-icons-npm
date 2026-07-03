import React from 'react';

export interface BruPlaystationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPlaystation(props: BruPlaystationProps): React.ReactElement;
export default BruPlaystation;
