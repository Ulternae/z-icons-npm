import React from 'react';

export interface LanFireFlameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlame(props: LanFireFlameProps): React.ReactElement;
export default LanFireFlame;
