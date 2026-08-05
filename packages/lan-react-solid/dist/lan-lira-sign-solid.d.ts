import React from 'react';

export interface LanLiraSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLiraSignSolid(props: LanLiraSignSolidProps): React.ReactElement;
export default LanLiraSignSolid;
