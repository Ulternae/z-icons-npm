import React from 'react';

export interface LanAlien8bitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlien8bitThin(props: LanAlien8bitThinProps): React.ReactElement;
export default LanAlien8bitThin;
