import React from 'react';

export interface LanFontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontRegular(props: LanFontRegularProps): React.ReactElement;
export default LanFontRegular;
