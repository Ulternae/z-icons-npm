import React from 'react';

export interface LanTextSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSlash: React.FC<LanTextSlashProps>;
export default LanTextSlash;
