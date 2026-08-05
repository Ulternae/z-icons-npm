import React from 'react';

export interface LanMaskSnorkelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskSnorkelThin(props: LanMaskSnorkelThinProps): React.ReactElement;
export default LanMaskSnorkelThin;
