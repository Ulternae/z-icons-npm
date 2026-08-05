import React from 'react';

export interface LanFaceThinkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThinking(props: LanFaceThinkingProps): React.ReactElement;
export default LanFaceThinking;
