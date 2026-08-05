import React from 'react';

export interface LanDiceFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFour(props: LanDiceFourProps): React.ReactElement;
export default LanDiceFour;
