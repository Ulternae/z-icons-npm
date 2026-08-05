import React from 'react';

export interface MinaQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionSolid(props: MinaQuestionSolidProps): React.ReactElement;
export default MinaQuestionSolid;
