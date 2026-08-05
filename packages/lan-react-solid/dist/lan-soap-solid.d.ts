import React from 'react';

export interface LanSoapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoapSolid(props: LanSoapSolidProps): React.ReactElement;
export default LanSoapSolid;
