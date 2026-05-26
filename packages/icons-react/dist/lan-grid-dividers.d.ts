import React from 'react';

export interface LanGridDividersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridDividers: React.FC<LanGridDividersProps>;
export default LanGridDividers;
