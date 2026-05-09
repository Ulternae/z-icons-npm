import React from 'react';

export interface MinaQuestionCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionCircleSolid: React.FC<MinaQuestionCircleSolidProps>;
export default MinaQuestionCircleSolid;
