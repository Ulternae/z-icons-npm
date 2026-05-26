import React from 'react';

export interface LanObjectUngroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUngroup: React.FC<LanObjectUngroupProps>;
export default LanObjectUngroup;
