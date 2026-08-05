import React from 'react';

export interface LanLanguageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLanguageRegular(props: LanLanguageRegularProps): React.ReactElement;
export default LanLanguageRegular;
