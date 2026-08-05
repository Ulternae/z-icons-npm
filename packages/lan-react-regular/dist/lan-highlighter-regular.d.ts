import React from 'react';

export interface LanHighlighterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterRegular(props: LanHighlighterRegularProps): React.ReactElement;
export default LanHighlighterRegular;
