import React from 'react';

export interface LanDuckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDuck(props: LanDuckProps): React.ReactElement;
export default LanDuck;
