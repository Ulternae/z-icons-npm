import React from 'react';

export interface BruStravaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStrava(props: BruStravaProps): React.ReactElement;
export default BruStrava;
