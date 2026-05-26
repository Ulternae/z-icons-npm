import React from 'react';

export interface LanCaretRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretRightSolid: React.FC<LanCaretRightSolidProps>;
export default LanCaretRightSolid;
