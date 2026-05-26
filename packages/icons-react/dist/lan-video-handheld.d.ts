import React from 'react';

export interface LanVideoHandheldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoHandheld: React.FC<LanVideoHandheldProps>;
export default LanVideoHandheld;
