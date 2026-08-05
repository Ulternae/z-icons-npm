import React from 'react';

export interface LanCommentTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTimes(props: LanCommentTimesProps): React.ReactElement;
export default LanCommentTimes;
