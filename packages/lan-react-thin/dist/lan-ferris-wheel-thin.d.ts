import React from 'react';

export interface LanFerrisWheelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerrisWheelThin(props: LanFerrisWheelThinProps): React.ReactElement;
export default LanFerrisWheelThin;
