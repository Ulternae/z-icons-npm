import React from 'react';

export interface LanCoconutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoconutThin(props: LanCoconutThinProps): React.ReactElement;
export default LanCoconutThin;
