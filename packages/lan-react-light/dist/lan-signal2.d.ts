import React from 'react';

export interface LanSignal2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal2(props: LanSignal2Props): React.ReactElement;
export default LanSignal2;
