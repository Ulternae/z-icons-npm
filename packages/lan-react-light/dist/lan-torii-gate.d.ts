import React from 'react';

export interface LanToriiGateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToriiGate(props: LanToriiGateProps): React.ReactElement;
export default LanToriiGate;
