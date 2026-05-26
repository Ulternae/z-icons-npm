import React from 'react';

export interface LanWreathLaurelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathLaurelSolid: React.FC<LanWreathLaurelSolidProps>;
export default LanWreathLaurelSolid;
