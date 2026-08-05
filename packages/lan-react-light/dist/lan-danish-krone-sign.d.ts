import React from 'react';

export interface LanDanishKroneSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDanishKroneSign(props: LanDanishKroneSignProps): React.ReactElement;
export default LanDanishKroneSign;
