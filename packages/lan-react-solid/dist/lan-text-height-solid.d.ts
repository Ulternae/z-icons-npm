import React from 'react';

export interface LanTextHeightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextHeightSolid(props: LanTextHeightSolidProps): React.ReactElement;
export default LanTextHeightSolid;
