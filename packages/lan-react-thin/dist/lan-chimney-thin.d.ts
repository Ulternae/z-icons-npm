import React from 'react';

export interface LanChimneyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChimneyThin(props: LanChimneyThinProps): React.ReactElement;
export default LanChimneyThin;
