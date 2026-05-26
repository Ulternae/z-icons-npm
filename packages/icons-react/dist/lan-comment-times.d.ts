import React from 'react';

export interface LanCommentTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTimes: React.FC<LanCommentTimesProps>;
export default LanCommentTimes;
