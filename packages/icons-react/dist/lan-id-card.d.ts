import React from 'react';

export interface LanIdCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCard: React.FC<LanIdCardProps>;
export default LanIdCard;
