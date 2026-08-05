import React from 'react';

export interface LanHandshakeAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandshakeAlt(props: LanHandshakeAltProps): React.ReactElement;
export default LanHandshakeAlt;
