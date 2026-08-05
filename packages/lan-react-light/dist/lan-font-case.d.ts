import React from 'react';

export interface LanFontCaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontCase(props: LanFontCaseProps): React.ReactElement;
export default LanFontCase;
