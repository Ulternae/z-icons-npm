import React from 'react';

export interface LanSignal3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal3(props: LanSignal3Props): React.ReactElement;
export default LanSignal3;
