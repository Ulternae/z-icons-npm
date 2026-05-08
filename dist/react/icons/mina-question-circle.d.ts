import React from 'react';

export interface MinaQuestionCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionCircle: React.FC<MinaQuestionCircleProps>;
export default MinaQuestionCircle;
