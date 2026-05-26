import React from 'react';

export interface LanDoNotEnterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoNotEnterSolid: React.FC<LanDoNotEnterSolidProps>;
export default LanDoNotEnterSolid;
