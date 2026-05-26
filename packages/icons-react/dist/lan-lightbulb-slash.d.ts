import React from 'react';

export interface LanLightbulbSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightbulbSlash: React.FC<LanLightbulbSlashProps>;
export default LanLightbulbSlash;
