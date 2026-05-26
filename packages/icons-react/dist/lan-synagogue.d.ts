import React from 'react';

export interface LanSynagogueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSynagogue: React.FC<LanSynagogueProps>;
export default LanSynagogue;
