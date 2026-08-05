import React from 'react';

export interface LanWonSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWonSign(props: LanWonSignProps): React.ReactElement;
export default LanWonSign;
