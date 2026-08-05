import React from 'react';

export interface LanQrcodeReadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeRead(props: LanQrcodeReadProps): React.ReactElement;
export default LanQrcodeRead;
