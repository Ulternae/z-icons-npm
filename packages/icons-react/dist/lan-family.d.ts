import React from 'react';

export interface LanFamilyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamily: React.FC<LanFamilyProps>;
export default LanFamily;
