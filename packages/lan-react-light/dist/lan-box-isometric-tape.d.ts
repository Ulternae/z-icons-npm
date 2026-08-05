import React from 'react';

export interface LanBoxIsometricTapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometricTape(props: LanBoxIsometricTapeProps): React.ReactElement;
export default LanBoxIsometricTape;
