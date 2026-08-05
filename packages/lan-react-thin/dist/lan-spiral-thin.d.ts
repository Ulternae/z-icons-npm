import React from 'react';

export interface LanSpiralThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiralThin(props: LanSpiralThinProps): React.ReactElement;
export default LanSpiralThin;
