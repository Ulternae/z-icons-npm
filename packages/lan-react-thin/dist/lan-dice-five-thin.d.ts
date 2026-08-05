import React from 'react';

export interface LanDiceFiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFiveThin(props: LanDiceFiveThinProps): React.ReactElement;
export default LanDiceFiveThin;
