import React from 'react';

export interface CoreShieldSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldSlash: React.FC<CoreShieldSlashProps>;
export default CoreShieldSlash;
