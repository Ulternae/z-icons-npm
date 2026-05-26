import React from 'react';

export interface LanBellSchoolSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSchoolSlash: React.FC<LanBellSchoolSlashProps>;
export default LanBellSchoolSlash;
