import React from 'react';

export interface LanReelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReel(props: LanReelProps): React.ReactElement;
export default LanReel;
