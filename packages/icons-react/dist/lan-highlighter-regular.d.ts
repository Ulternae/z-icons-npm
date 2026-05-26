import React from 'react';

export interface LanHighlighterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterRegular: React.FC<LanHighlighterRegularProps>;
export default LanHighlighterRegular;
