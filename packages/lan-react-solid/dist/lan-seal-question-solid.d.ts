import React from 'react';

export interface LanSealQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealQuestionSolid(props: LanSealQuestionSolidProps): React.ReactElement;
export default LanSealQuestionSolid;
