import React from 'react';

export interface LanSubtitlesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSubtitlesThin(props: LanSubtitlesThinProps): React.ReactElement;
export default LanSubtitlesThin;
