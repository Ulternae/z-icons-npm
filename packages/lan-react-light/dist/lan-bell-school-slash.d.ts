import React from 'react';

export interface LanBellSchoolSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSchoolSlash(props: LanBellSchoolSlashProps): React.ReactElement;
export default LanBellSchoolSlash;
