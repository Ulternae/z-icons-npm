import React from 'react';

export interface LanHoseReelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoseReel(props: LanHoseReelProps): React.ReactElement;
export default LanHoseReel;
