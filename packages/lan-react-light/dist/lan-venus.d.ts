import React from 'react';

export interface LanVenusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenus(props: LanVenusProps): React.ReactElement;
export default LanVenus;
