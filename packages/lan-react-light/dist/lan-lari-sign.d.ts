import React from 'react';

export interface LanLariSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLariSign(props: LanLariSignProps): React.ReactElement;
export default LanLariSign;
