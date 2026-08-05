import React from 'react';

export interface LanSunAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunAlt(props: LanSunAltProps): React.ReactElement;
export default LanSunAlt;
