import React from 'react';

export interface LanEurozoneSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEurozoneSign(props: LanEurozoneSignProps): React.ReactElement;
export default LanEurozoneSign;
