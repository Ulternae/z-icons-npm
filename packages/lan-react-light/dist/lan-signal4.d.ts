import React from 'react';

export interface LanSignal4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal4(props: LanSignal4Props): React.ReactElement;
export default LanSignal4;
