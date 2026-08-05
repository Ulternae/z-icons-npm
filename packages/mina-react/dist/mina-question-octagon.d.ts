import React from 'react';

export interface MinaQuestionOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionOctagon(props: MinaQuestionOctagonProps): React.ReactElement;
export default MinaQuestionOctagon;
