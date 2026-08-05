import React from 'react';

export interface LanDiceFourThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFourThin(props: LanDiceFourThinProps): React.ReactElement;
export default LanDiceFourThin;
