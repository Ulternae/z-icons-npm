import React from 'react';

export interface LanScarfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarf(props: LanScarfProps): React.ReactElement;
export default LanScarf;
