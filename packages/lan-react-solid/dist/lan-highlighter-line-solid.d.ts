import React from 'react';

export interface LanHighlighterLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterLineSolid(props: LanHighlighterLineSolidProps): React.ReactElement;
export default LanHighlighterLineSolid;
