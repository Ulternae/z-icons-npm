import React from 'react';

export interface LanSignal2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal2Thin(props: LanSignal2ThinProps): React.ReactElement;
export default LanSignal2Thin;
