import React from 'react';

export interface LanDiceFiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceFiveRegular(props: LanDiceFiveRegularProps): React.ReactElement;
export default LanDiceFiveRegular;
