import React from 'react';

export interface MinaQuestionWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionWavesSolid(props: MinaQuestionWavesSolidProps): React.ReactElement;
export default MinaQuestionWavesSolid;
