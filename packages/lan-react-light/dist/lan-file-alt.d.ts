import React from 'react';

export interface LanFileAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAlt(props: LanFileAltProps): React.ReactElement;
export default LanFileAlt;
