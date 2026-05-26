import React from 'react';

export interface LanClawMarksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClawMarks: React.FC<LanClawMarksProps>;
export default LanClawMarks;
