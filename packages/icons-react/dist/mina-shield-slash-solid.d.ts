import React from 'react';

export interface MinaShieldSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldSlashSolid: React.FC<MinaShieldSlashSolidProps>;
export default MinaShieldSlashSolid;
