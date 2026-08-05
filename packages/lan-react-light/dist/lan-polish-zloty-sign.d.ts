import React from 'react';

export interface LanPolishZlotySignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPolishZlotySign(props: LanPolishZlotySignProps): React.ReactElement;
export default LanPolishZlotySign;
