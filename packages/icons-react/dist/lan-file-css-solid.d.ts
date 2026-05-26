import React from 'react';

export interface LanFileCssSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCssSolid: React.FC<LanFileCssSolidProps>;
export default LanFileCssSolid;
