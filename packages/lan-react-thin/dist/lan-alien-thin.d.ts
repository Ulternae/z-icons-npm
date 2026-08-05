import React from 'react';

export interface LanAlienThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlienThin(props: LanAlienThinProps): React.ReactElement;
export default LanAlienThin;
