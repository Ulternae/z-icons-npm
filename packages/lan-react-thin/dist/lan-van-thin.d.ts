import React from 'react';

export interface LanVanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVanThin(props: LanVanThinProps): React.ReactElement;
export default LanVanThin;
