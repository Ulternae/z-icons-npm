import React from 'react';

export interface LanBlockBrickFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockBrickFire(props: LanBlockBrickFireProps): React.ReactElement;
export default LanBlockBrickFire;
