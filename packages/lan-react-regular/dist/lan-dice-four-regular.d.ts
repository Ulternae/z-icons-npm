import React from 'react';

export interface LanDiceFourRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFourRegular(props: LanDiceFourRegularProps): React.ReactElement;
export default LanDiceFourRegular;
