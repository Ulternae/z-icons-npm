import React from 'react';

export interface LanTapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTape: React.FC<LanTapeProps>;
export default LanTape;
