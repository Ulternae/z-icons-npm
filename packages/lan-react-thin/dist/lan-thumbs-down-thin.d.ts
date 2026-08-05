import React from 'react';

export interface LanThumbsDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsDownThin(props: LanThumbsDownThinProps): React.ReactElement;
export default LanThumbsDownThin;
