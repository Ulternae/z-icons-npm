import React from 'react';

export interface LanFaceShakingVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShakingVertical(props: LanFaceShakingVerticalProps): React.ReactElement;
export default LanFaceShakingVertical;
