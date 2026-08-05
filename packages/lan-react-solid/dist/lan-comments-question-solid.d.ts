import React from 'react';

export interface LanCommentsQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsQuestionSolid(props: LanCommentsQuestionSolidProps): React.ReactElement;
export default LanCommentsQuestionSolid;
