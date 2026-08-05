import React from 'react';

export interface LanFontCaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontCaseRegular(props: LanFontCaseRegularProps): React.ReactElement;
export default LanFontCaseRegular;
