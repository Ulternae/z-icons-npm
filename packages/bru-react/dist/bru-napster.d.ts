import React from 'react';

export interface BruNapsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNapster(props: BruNapsterProps): React.ReactElement;
export default BruNapster;
