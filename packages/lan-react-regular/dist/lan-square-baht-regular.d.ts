import React from 'react';

export interface LanSquareBahtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBahtRegular(props: LanSquareBahtRegularProps): React.ReactElement;
export default LanSquareBahtRegular;
