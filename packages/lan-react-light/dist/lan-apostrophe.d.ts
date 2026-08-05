import React from 'react';

export interface LanApostropheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApostrophe(props: LanApostropheProps): React.ReactElement;
export default LanApostrophe;
