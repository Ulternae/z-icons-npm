import React from 'react';

export interface LanObjectExcludeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectExcludeRegular: React.FC<LanObjectExcludeRegularProps>;
export default LanObjectExcludeRegular;
