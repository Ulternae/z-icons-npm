import React from 'react';

export interface LanGridDividersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridDividersThin: React.FC<LanGridDividersThinProps>;
export default LanGridDividersThin;
