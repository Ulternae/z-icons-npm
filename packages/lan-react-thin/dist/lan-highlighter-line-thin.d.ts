import React from 'react';

export interface LanHighlighterLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterLineThin(props: LanHighlighterLineThinProps): React.ReactElement;
export default LanHighlighterLineThin;
