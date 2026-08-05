import React from 'react';

export interface LanDiceTwoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceTwoThin(props: LanDiceTwoThinProps): React.ReactElement;
export default LanDiceTwoThin;
