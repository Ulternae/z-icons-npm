import React from 'react';

export interface LanHeadphonesSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadphonesSlash: React.FC<LanHeadphonesSlashProps>;
export default LanHeadphonesSlash;
