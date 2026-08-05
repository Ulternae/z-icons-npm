import React from 'react';

export interface LanHighlighterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHighlighterSolid(props: LanHighlighterSolidProps): React.ReactElement;
export default LanHighlighterSolid;
