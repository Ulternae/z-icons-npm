import React from 'react';

export interface LanPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPause(props: LanPauseProps): React.ReactElement;
export default LanPause;
