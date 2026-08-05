import React from 'react';

export interface LanFaceThinkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThinkingThin(props: LanFaceThinkingThinProps): React.ReactElement;
export default LanFaceThinkingThin;
