import React from 'react';

export interface LanObjectExcludeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectExclude: React.FC<LanObjectExcludeProps>;
export default LanObjectExclude;
