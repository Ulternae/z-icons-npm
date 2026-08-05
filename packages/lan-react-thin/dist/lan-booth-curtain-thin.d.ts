import React from 'react';

export interface LanBoothCurtainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoothCurtainThin(props: LanBoothCurtainThinProps): React.ReactElement;
export default LanBoothCurtainThin;
