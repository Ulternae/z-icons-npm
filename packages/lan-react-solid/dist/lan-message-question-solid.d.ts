import React from 'react';

export interface LanMessageQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageQuestionSolid(props: LanMessageQuestionSolidProps): React.ReactElement;
export default LanMessageQuestionSolid;
