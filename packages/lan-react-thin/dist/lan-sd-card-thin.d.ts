import React from 'react';

export interface LanSdCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCardThin(props: LanSdCardThinProps): React.ReactElement;
export default LanSdCardThin;
