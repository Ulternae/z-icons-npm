import React from 'react';

export interface LanShowerAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShowerAlt(props: LanShowerAltProps): React.ReactElement;
export default LanShowerAlt;
