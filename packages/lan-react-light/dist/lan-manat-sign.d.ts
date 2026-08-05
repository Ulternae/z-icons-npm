import React from 'react';

export interface LanManatSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManatSign(props: LanManatSignProps): React.ReactElement;
export default LanManatSign;
