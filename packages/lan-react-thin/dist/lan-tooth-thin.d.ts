import React from 'react';

export interface LanToothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothThin(props: LanToothThinProps): React.ReactElement;
export default LanToothThin;
