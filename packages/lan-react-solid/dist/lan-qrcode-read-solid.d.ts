import React from 'react';

export interface LanQrcodeReadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeReadSolid(props: LanQrcodeReadSolidProps): React.ReactElement;
export default LanQrcodeReadSolid;
