import React from 'react';

export interface LanCarOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarOn: React.FC<LanCarOnProps>;
export default LanCarOn;
