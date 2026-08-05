import React from 'react';

export interface LanColonSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanColonSign(props: LanColonSignProps): React.ReactElement;
export default LanColonSign;
