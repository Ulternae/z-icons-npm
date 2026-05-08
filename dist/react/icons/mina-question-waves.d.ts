import React from 'react';

export interface MinaQuestionWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionWaves: React.FC<MinaQuestionWavesProps>;
export default MinaQuestionWaves;
