import React from 'react';

export interface LanBarProgressEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressEmptyThin(props: LanBarProgressEmptyThinProps): React.ReactElement;
export default LanBarProgressEmptyThin;
