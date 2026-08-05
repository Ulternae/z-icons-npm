import React from 'react';

export interface LanFlorinSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlorinSign(props: LanFlorinSignProps): React.ReactElement;
export default LanFlorinSign;
