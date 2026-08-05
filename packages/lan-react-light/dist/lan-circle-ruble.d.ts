import React from 'react';

export interface LanCircleRubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRuble(props: LanCircleRubleProps): React.ReactElement;
export default LanCircleRuble;
