import React from 'react';

export interface LanTransporter2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporter2Thin(props: LanTransporter2ThinProps): React.ReactElement;
export default LanTransporter2Thin;
