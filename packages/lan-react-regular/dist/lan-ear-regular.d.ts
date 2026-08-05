import React from 'react';

export interface LanEarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarRegular(props: LanEarRegularProps): React.ReactElement;
export default LanEarRegular;
