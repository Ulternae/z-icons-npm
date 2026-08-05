import React from 'react';

export interface LanScalpelLineDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpelLineDashedSolid(props: LanScalpelLineDashedSolidProps): React.ReactElement;
export default LanScalpelLineDashedSolid;
