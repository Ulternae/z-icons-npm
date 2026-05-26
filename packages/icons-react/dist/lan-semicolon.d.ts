import React from 'react';

export interface LanSemicolonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSemicolon: React.FC<LanSemicolonProps>;
export default LanSemicolon;
