import React from 'react';

export interface MinaQuestionWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionWavesSolid: React.FC<MinaQuestionWavesSolidProps>;
export default MinaQuestionWavesSolid;
