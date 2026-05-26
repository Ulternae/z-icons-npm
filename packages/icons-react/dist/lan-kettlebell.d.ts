import React from 'react';

export interface LanKettlebellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKettlebell: React.FC<LanKettlebellProps>;
export default LanKettlebell;
