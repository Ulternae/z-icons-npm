import React from 'react';

export interface LanBoxAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxAlt(props: LanBoxAltProps): React.ReactElement;
export default LanBoxAlt;
