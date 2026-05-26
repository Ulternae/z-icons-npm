import React from 'react';

export interface LanFolderTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTimes: React.FC<LanFolderTimesProps>;
export default LanFolderTimes;
