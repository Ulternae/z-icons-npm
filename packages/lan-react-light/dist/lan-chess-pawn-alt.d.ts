import React from 'react';

export interface LanChessPawnAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawnAlt(props: LanChessPawnAltProps): React.ReactElement;
export default LanChessPawnAlt;
