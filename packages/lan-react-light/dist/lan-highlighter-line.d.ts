import React from 'react';

export interface LanHighlighterLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterLine(props: LanHighlighterLineProps): React.ReactElement;
export default LanHighlighterLine;
