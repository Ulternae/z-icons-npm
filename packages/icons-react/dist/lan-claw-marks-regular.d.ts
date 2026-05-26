import React from 'react';

export interface LanClawMarksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClawMarksRegular: React.FC<LanClawMarksRegularProps>;
export default LanClawMarksRegular;
