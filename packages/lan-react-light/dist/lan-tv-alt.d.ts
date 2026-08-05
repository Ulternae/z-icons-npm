import React from 'react';

export interface LanTvAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvAlt(props: LanTvAltProps): React.ReactElement;
export default LanTvAlt;
