import React from 'react';

export interface MinaShieldSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldSlash: React.FC<MinaShieldSlashProps>;
export default MinaShieldSlash;
