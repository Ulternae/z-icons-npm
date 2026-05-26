import React from 'react';

export interface LanSignalStreamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalStreamSolid: React.FC<LanSignalStreamSolidProps>;
export default LanSignalStreamSolid;
