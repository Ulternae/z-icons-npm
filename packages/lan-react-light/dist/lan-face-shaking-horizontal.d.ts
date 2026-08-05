import React from 'react';

export interface LanFaceShakingHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShakingHorizontal(props: LanFaceShakingHorizontalProps): React.ReactElement;
export default LanFaceShakingHorizontal;
