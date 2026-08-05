import React from 'react';

export interface LanSquareBRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBRegular(props: LanSquareBRegularProps): React.ReactElement;
export default LanSquareBRegular;
