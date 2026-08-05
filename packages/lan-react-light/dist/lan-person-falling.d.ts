import React from 'react';

export interface LanPersonFallingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFalling(props: LanPersonFallingProps): React.ReactElement;
export default LanPersonFalling;
