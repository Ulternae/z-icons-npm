import React from 'react';

export interface LanERegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanERegular(props: LanERegularProps): React.ReactElement;
export default LanERegular;
