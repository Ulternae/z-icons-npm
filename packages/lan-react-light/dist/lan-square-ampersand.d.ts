import React from 'react';

export interface LanSquareAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareAmpersand(props: LanSquareAmpersandProps): React.ReactElement;
export default LanSquareAmpersand;
