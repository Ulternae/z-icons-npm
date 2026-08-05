import React from 'react';

export interface LanHelicopterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterRegular(props: LanHelicopterRegularProps): React.ReactElement;
export default LanHelicopterRegular;
