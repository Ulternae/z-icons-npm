import React from 'react';

export interface LanBoxCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCheck(props: LanBoxCheckProps): React.ReactElement;
export default LanBoxCheck;
