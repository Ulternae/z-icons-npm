import React from 'react';

export interface LanBookAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAlt(props: LanBookAltProps): React.ReactElement;
export default LanBookAlt;
