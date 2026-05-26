import React from 'react';

export interface LanObjectUngroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUngroupThin: React.FC<LanObjectUngroupThinProps>;
export default LanObjectUngroupThin;
