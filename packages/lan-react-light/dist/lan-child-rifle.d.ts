import React from 'react';

export interface LanChildRifleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildRifle(props: LanChildRifleProps): React.ReactElement;
export default LanChildRifle;
