import React from 'react';

export interface LanScooterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScooter(props: LanScooterProps): React.ReactElement;
export default LanScooter;
