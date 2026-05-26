import React from 'react';

export interface LanICursorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanICursorRegular: React.FC<LanICursorRegularProps>;
export default LanICursorRegular;
