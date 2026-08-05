import React from 'react';

export interface LanSignPostRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostRegular(props: LanSignPostRegularProps): React.ReactElement;
export default LanSignPostRegular;
