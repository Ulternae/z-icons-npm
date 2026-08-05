import React from 'react';

export interface LanCentSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCentSign(props: LanCentSignProps): React.ReactElement;
export default LanCentSign;
