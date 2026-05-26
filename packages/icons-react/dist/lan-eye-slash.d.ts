import React from 'react';

export interface LanEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeSlash: React.FC<LanEyeSlashProps>;
export default LanEyeSlash;
