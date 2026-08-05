import React from 'react';

export interface LanChessPawnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessPawn(props: LanChessPawnProps): React.ReactElement;
export default LanChessPawn;
