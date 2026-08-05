import React from 'react';

export interface LanPantsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPants(props: LanPantsProps): React.ReactElement;
export default LanPants;
