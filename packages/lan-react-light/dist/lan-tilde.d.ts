import React from 'react';

export interface LanTildeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTilde(props: LanTildeProps): React.ReactElement;
export default LanTilde;
