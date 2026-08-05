import React from 'react';

export interface LanSynagogueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSynagogue(props: LanSynagogueProps): React.ReactElement;
export default LanSynagogue;
