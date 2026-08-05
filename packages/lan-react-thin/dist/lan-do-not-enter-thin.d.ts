import React from 'react';

export interface LanDoNotEnterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoNotEnterThin(props: LanDoNotEnterThinProps): React.ReactElement;
export default LanDoNotEnterThin;
