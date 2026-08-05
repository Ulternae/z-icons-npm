import React from 'react';

export interface LanTableLayoutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableLayoutRegular(props: LanTableLayoutRegularProps): React.ReactElement;
export default LanTableLayoutRegular;
