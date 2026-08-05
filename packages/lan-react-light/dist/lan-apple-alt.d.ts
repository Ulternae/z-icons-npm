import React from 'react';

export interface LanAppleAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleAlt(props: LanAppleAltProps): React.ReactElement;
export default LanAppleAlt;
