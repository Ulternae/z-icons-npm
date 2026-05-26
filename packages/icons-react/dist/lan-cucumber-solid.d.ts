import React from 'react';

export interface LanCucumberSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCucumberSolid: React.FC<LanCucumberSolidProps>;
export default LanCucumberSolid;
