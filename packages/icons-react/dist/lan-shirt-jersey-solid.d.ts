import React from 'react';

export interface LanShirtJerseySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtJerseySolid: React.FC<LanShirtJerseySolidProps>;
export default LanShirtJerseySolid;
