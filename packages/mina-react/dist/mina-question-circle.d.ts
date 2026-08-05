import React from 'react';

export interface MinaQuestionCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionCircle(props: MinaQuestionCircleProps): React.ReactElement;
export default MinaQuestionCircle;
