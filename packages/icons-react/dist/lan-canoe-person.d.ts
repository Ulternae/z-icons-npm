import React from 'react';

export interface LanCanoePersonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanoePerson: React.FC<LanCanoePersonProps>;
export default LanCanoePerson;
