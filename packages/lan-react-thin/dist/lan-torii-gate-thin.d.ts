import React from 'react';

export interface LanToriiGateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToriiGateThin(props: LanToriiGateThinProps): React.ReactElement;
export default LanToriiGateThin;
