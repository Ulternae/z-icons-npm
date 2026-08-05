import React from 'react';

export interface LanHighlighterLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterLineRegular(props: LanHighlighterLineRegularProps): React.ReactElement;
export default LanHighlighterLineRegular;
