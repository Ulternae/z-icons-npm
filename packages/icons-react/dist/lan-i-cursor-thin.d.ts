import React from 'react';

export interface LanICursorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanICursorThin: React.FC<LanICursorThinProps>;
export default LanICursorThin;
