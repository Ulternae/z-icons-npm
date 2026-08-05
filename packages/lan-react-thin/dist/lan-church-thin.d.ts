import React from 'react';

export interface LanChurchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChurchThin(props: LanChurchThinProps): React.ReactElement;
export default LanChurchThin;
