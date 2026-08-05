import React from 'react';

export interface LanSwatchbookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwatchbookSolid(props: LanSwatchbookSolidProps): React.ReactElement;
export default LanSwatchbookSolid;
