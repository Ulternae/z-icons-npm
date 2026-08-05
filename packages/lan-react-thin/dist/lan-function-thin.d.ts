import React from 'react';

export interface LanFunctionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFunctionThin(props: LanFunctionThinProps): React.ReactElement;
export default LanFunctionThin;
