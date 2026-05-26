import React from 'react';

export interface LanICursorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanICursor: React.FC<LanICursorProps>;
export default LanICursor;
