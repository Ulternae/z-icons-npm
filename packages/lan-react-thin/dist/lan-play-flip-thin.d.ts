import React from 'react';

export interface LanPlayFlipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayFlipThin(props: LanPlayFlipThinProps): React.ReactElement;
export default LanPlayFlipThin;
