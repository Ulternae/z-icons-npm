import React from 'react';

export interface LanSignalStreamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalStream: React.FC<LanSignalStreamProps>;
export default LanSignalStream;
