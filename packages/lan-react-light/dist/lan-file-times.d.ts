import React from 'react';

export interface LanFileTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTimes(props: LanFileTimesProps): React.ReactElement;
export default LanFileTimes;
