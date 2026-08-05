import React from 'react';

export interface LanFeatherRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFeatherRegular(props: LanFeatherRegularProps): React.ReactElement;
export default LanFeatherRegular;
