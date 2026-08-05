import React from 'react';

export interface LanAirplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplay(props: LanAirplayProps): React.ReactElement;
export default LanAirplay;
