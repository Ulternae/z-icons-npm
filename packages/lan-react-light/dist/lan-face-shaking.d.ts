import React from 'react';

export interface LanFaceShakingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShaking(props: LanFaceShakingProps): React.ReactElement;
export default LanFaceShaking;
