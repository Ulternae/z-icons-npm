import React from 'react';

export interface LanTeddyBearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeddyBear(props: LanTeddyBearProps): React.ReactElement;
export default LanTeddyBear;
