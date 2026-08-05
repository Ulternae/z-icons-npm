import React from 'react';

export interface LanImageStackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageStackThin(props: LanImageStackThinProps): React.ReactElement;
export default LanImageStackThin;
