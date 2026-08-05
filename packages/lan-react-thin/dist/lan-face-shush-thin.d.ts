import React from 'react';

export interface LanFaceShushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShushThin(props: LanFaceShushThinProps): React.ReactElement;
export default LanFaceShushThin;
