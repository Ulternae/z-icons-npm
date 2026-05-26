import React from 'react';

export interface LanFileXlsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXls: React.FC<LanFileXlsProps>;
export default LanFileXls;
