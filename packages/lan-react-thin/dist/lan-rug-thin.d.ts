import React from 'react';

export interface LanRugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugThin(props: LanRugThinProps): React.ReactElement;
export default LanRugThin;
