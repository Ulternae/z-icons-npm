import React from 'react';

export interface LanCouchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouch: React.FC<LanCouchProps>;
export default LanCouch;
