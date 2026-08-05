import React from 'react';

export interface LanSquareLariRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLariRegular(props: LanSquareLariRegularProps): React.ReactElement;
export default LanSquareLariRegular;
