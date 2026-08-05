import React from 'react';

export interface LanHighlighterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighter(props: LanHighlighterProps): React.ReactElement;
export default LanHighlighter;
