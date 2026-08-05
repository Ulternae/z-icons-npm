import React from 'react';

export interface LanHyphenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHyphenRegular(props: LanHyphenRegularProps): React.ReactElement;
export default LanHyphenRegular;
