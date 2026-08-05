import React from 'react';

export interface LanLiraSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLiraSign(props: LanLiraSignProps): React.ReactElement;
export default LanLiraSign;
