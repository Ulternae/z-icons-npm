import React from 'react';

export interface LanDiceTwoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceTwoRegular(props: LanDiceTwoRegularProps): React.ReactElement;
export default LanDiceTwoRegular;
