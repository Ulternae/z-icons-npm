import React from 'react';

export interface LanNoteStickyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteStickyThin(props: LanNoteStickyThinProps): React.ReactElement;
export default LanNoteStickyThin;
