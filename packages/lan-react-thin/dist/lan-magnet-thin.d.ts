import React from 'react';

export interface LanMagnetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnetThin(props: LanMagnetThinProps): React.ReactElement;
export default LanMagnetThin;
