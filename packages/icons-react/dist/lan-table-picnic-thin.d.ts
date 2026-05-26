import React from 'react';

export interface LanTablePicnicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTablePicnicThin: React.FC<LanTablePicnicThinProps>;
export default LanTablePicnicThin;
