import React from 'react';

export interface LanAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlt(props: LanAltProps): React.ReactElement;
export default LanAlt;
