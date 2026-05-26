import React from 'react';

export interface LanWindTurbineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindTurbineThin: React.FC<LanWindTurbineThinProps>;
export default LanWindTurbineThin;
