import React from 'react';

export interface LanDryerAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDryerAlt(props: LanDryerAltProps): React.ReactElement;
export default LanDryerAlt;
