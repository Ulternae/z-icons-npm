import React from 'react';

export interface LanHighlighterLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterLineRegular: React.FC<LanHighlighterLineRegularProps>;
export default LanHighlighterLineRegular;
