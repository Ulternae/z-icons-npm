import React from 'react';

export interface LanTShirtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTShirtThin(props: LanTShirtThinProps): React.ReactElement;
export default LanTShirtThin;
