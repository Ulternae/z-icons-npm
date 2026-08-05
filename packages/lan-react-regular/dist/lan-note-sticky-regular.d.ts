import React from 'react';

export interface LanNoteStickyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteStickyRegular(props: LanNoteStickyRegularProps): React.ReactElement;
export default LanNoteStickyRegular;
