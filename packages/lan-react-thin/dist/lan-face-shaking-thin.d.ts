import React from 'react';

export interface LanFaceShakingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShakingThin(props: LanFaceShakingThinProps): React.ReactElement;
export default LanFaceShakingThin;
