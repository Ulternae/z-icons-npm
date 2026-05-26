import React from 'react';

export interface LanObjectUngroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUngroupRegular: React.FC<LanObjectUngroupRegularProps>;
export default LanObjectUngroupRegular;
