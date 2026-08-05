import React from 'react';

export interface LanSquareAustralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareAustral(props: LanSquareAustralProps): React.ReactElement;
export default LanSquareAustral;
