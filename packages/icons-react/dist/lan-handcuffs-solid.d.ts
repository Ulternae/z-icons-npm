import React from 'react';

export interface LanHandcuffsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandcuffsSolid: React.FC<LanHandcuffsSolidProps>;
export default LanHandcuffsSolid;
