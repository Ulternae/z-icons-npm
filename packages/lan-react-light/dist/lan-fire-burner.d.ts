import React from 'react';

export interface LanFireBurnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireBurner(props: LanFireBurnerProps): React.ReactElement;
export default LanFireBurner;
