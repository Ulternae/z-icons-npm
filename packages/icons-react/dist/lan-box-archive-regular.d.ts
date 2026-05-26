import React from 'react';

export interface LanBoxArchiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxArchiveRegular: React.FC<LanBoxArchiveRegularProps>;
export default LanBoxArchiveRegular;
