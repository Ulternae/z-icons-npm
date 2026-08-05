import React from 'react';

export interface LanButterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterThin(props: LanButterThinProps): React.ReactElement;
export default LanButterThin;
