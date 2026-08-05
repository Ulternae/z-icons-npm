import React from 'react';

export interface LanDryerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDryer(props: LanDryerProps): React.ReactElement;
export default LanDryer;
