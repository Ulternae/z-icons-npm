import React from 'react';

export interface LanPantiesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanties(props: LanPantiesProps): React.ReactElement;
export default LanPanties;
