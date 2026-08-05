import React from 'react';

export interface LanPretzelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPretzelThin(props: LanPretzelThinProps): React.ReactElement;
export default LanPretzelThin;
