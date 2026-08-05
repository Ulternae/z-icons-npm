import React from 'react';

export interface LanSynagogueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSynagogueRegular(props: LanSynagogueRegularProps): React.ReactElement;
export default LanSynagogueRegular;
