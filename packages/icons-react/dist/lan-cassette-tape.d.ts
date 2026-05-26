import React from 'react';

export interface LanCassetteTapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteTape: React.FC<LanCassetteTapeProps>;
export default LanCassetteTape;
