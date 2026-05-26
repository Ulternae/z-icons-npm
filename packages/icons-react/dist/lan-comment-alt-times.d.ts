import React from 'react';

export interface LanCommentAltTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltTimes: React.FC<LanCommentAltTimesProps>;
export default LanCommentAltTimes;
