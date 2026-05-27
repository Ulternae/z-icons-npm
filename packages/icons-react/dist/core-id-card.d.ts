import React from 'react';

export interface CoreIdCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreIdCard: React.FC<CoreIdCardProps>;
export default CoreIdCard;
