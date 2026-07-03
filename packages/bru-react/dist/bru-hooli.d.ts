import React from 'react';

export interface BruHooliProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHooli(props: BruHooliProps): React.ReactElement;
export default BruHooli;
