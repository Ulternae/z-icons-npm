import React from 'react';

export interface LanSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanS(props: LanSProps): React.ReactElement;
export default LanS;
