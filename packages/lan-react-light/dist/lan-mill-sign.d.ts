import React from 'react';

export interface LanMillSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMillSign(props: LanMillSignProps): React.ReactElement;
export default LanMillSign;
