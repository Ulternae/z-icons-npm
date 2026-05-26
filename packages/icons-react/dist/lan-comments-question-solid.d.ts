import React from 'react';

export interface LanCommentsQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsQuestionSolid: React.FC<LanCommentsQuestionSolidProps>;
export default LanCommentsQuestionSolid;
