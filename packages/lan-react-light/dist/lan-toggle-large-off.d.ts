import React from 'react';

export interface LanToggleLargeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleLargeOff(props: LanToggleLargeOffProps): React.ReactElement;
export default LanToggleLargeOff;
