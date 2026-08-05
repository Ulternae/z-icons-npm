import React from 'react';

export interface LanMarsAndVenusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsAndVenus(props: LanMarsAndVenusProps): React.ReactElement;
export default LanMarsAndVenus;
