import React from 'react';

export interface LanSuperscriptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuperscriptRegular(props: LanSuperscriptRegularProps): React.ReactElement;
export default LanSuperscriptRegular;
