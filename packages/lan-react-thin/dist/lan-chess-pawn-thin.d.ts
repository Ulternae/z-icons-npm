import React from 'react';

export interface LanChessPawnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawnThin(props: LanChessPawnThinProps): React.ReactElement;
export default LanChessPawnThin;
