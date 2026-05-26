import React from 'react';

export interface LanFileBinarySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBinarySolid: React.FC<LanFileBinarySolidProps>;
export default LanFileBinarySolid;
