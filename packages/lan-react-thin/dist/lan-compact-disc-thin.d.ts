import React from 'react';

export interface LanCompactDiscThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompactDiscThin(props: LanCompactDiscThinProps): React.ReactElement;
export default LanCompactDiscThin;
