import React from 'react';

export interface LanBongThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBongThin(props: LanBongThinProps): React.ReactElement;
export default LanBongThin;
