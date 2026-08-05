import React from 'react';

export interface LanPauseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPauseThin(props: LanPauseThinProps): React.ReactElement;
export default LanPauseThin;
