import React from 'react';

export interface LanChildThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildThin(props: LanChildThinProps): React.ReactElement;
export default LanChildThin;
