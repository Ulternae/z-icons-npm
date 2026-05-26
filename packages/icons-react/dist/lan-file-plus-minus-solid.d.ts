import React from 'react';

export interface LanFilePlusMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlusMinusSolid: React.FC<LanFilePlusMinusSolidProps>;
export default LanFilePlusMinusSolid;
