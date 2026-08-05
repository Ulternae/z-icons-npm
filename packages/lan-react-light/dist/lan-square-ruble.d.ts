import React from 'react';

export interface LanSquareRubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRuble(props: LanSquareRubleProps): React.ReactElement;
export default LanSquareRuble;
