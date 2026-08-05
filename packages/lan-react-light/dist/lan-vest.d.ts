import React from 'react';

export interface LanVestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVest(props: LanVestProps): React.ReactElement;
export default LanVest;
