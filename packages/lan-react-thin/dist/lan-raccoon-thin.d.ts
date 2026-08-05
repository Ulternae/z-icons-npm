import React from 'react';

export interface LanRaccoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaccoonThin(props: LanRaccoonThinProps): React.ReactElement;
export default LanRaccoonThin;
