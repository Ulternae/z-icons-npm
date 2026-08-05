import React from 'react';

export interface LanCommentAltTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltTimes(props: LanCommentAltTimesProps): React.ReactElement;
export default LanCommentAltTimes;
