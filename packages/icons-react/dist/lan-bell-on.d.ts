import React from 'react';

export interface LanBellOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellOn: React.FC<LanBellOnProps>;
export default LanBellOn;
