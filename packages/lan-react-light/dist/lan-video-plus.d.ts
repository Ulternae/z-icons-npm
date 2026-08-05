import React from 'react';

export interface LanVideoPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoPlus(props: LanVideoPlusProps): React.ReactElement;
export default LanVideoPlus;
