import React from 'react';

export interface MinaQuestionOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionOctagonSolid(props: MinaQuestionOctagonSolidProps): React.ReactElement;
export default MinaQuestionOctagonSolid;
