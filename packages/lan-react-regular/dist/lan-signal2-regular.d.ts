import React from 'react';

export interface LanSignal2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal2Regular(props: LanSignal2RegularProps): React.ReactElement;
export default LanSignal2Regular;
