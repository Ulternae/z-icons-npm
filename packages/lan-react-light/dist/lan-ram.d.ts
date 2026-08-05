import React from 'react';

export interface LanRamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRam(props: LanRamProps): React.ReactElement;
export default LanRam;
