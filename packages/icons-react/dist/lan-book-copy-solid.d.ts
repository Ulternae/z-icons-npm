import React from 'react';

export interface LanBookCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookCopySolid: React.FC<LanBookCopySolidProps>;
export default LanBookCopySolid;
