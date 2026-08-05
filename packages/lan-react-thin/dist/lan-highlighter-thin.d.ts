import React from 'react';

export interface LanHighlighterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterThin(props: LanHighlighterThinProps): React.ReactElement;
export default LanHighlighterThin;
