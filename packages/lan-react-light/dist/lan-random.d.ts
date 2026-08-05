import React from 'react';

export interface LanRandomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRandom(props: LanRandomProps): React.ReactElement;
export default LanRandom;
