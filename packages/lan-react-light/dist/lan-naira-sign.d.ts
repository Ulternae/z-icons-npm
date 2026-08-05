import React from 'react';

export interface LanNairaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNairaSign(props: LanNairaSignProps): React.ReactElement;
export default LanNairaSign;
