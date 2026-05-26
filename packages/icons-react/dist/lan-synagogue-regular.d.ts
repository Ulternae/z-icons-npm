import React from 'react';

export interface LanSynagogueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSynagogueRegular: React.FC<LanSynagogueRegularProps>;
export default LanSynagogueRegular;
