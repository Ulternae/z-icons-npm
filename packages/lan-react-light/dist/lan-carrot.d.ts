import React from 'react';

export interface LanCarrotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarrot(props: LanCarrotProps): React.ReactElement;
export default LanCarrot;
