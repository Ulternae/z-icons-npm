import React from 'react';

export interface LanPersonSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSign(props: LanPersonSignProps): React.ReactElement;
export default LanPersonSign;
