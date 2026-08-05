import React from 'react';

export interface LanCannonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannon(props: LanCannonProps): React.ReactElement;
export default LanCannon;
