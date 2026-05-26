import React from 'react';

export interface LanHouseSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseSignal: React.FC<LanHouseSignalProps>;
export default LanHouseSignal;
