import React from 'react';

export interface LanBookFontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookFontRegular(props: LanBookFontRegularProps): React.ReactElement;
export default LanBookFontRegular;
