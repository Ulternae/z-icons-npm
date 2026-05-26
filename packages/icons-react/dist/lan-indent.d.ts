import React from 'react';

export interface LanIndentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndent: React.FC<LanIndentProps>;
export default LanIndent;
