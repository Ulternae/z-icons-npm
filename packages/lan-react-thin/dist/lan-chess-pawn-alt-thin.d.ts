import React from 'react';

export interface LanChessPawnAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawnAltThin(props: LanChessPawnAltThinProps): React.ReactElement;
export default LanChessPawnAltThin;
