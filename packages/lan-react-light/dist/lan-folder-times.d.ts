import React from 'react';

export interface LanFolderTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderTimes(props: LanFolderTimesProps): React.ReactElement;
export default LanFolderTimes;
