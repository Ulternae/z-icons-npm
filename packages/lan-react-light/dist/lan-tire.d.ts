import React from 'react';

export interface LanTireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTire(props: LanTireProps): React.ReactElement;
export default LanTire;
