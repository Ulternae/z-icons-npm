import React from 'react';

export interface MinaQuestionWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionWaves(props: MinaQuestionWavesProps): React.ReactElement;
export default MinaQuestionWaves;
