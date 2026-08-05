import React from 'react';

export interface LanHashtagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHashtagRegular(props: LanHashtagRegularProps): React.ReactElement;
export default LanHashtagRegular;
