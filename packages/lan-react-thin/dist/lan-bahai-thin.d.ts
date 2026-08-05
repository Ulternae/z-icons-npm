import React from 'react';

export interface LanBahaiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahaiThin(props: LanBahaiThinProps): React.ReactElement;
export default LanBahaiThin;
