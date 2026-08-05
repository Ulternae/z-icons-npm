import React from 'react';

export interface LanMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonThin(props: LanMoonThinProps): React.ReactElement;
export default LanMoonThin;
