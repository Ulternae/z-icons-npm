import React from 'react';

export interface LanFileDocProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDoc: React.FC<LanFileDocProps>;
export default LanFileDoc;
