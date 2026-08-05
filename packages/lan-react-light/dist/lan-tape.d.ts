import React from 'react';

export interface LanTapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTape(props: LanTapeProps): React.ReactElement;
export default LanTape;
