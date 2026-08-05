import React from 'react';

export interface LanSquareBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBoltRegular(props: LanSquareBoltRegularProps): React.ReactElement;
export default LanSquareBoltRegular;
