import React from 'react';

export interface LanTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTag: React.FC<LanTagProps>;
export default LanTag;
