import React from 'react';

export interface LanThumbsUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsUpThin(props: LanThumbsUpThinProps): React.ReactElement;
export default LanThumbsUpThin;
