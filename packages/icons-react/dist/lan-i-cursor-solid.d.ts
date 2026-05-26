import React from 'react';

export interface LanICursorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanICursorSolid: React.FC<LanICursorSolidProps>;
export default LanICursorSolid;
