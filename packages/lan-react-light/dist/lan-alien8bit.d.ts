import React from 'react';

export interface LanAlien8bitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlien8bit(props: LanAlien8bitProps): React.ReactElement;
export default LanAlien8bit;
