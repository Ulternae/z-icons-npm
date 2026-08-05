import React from 'react';

export interface LanFontCaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontCaseThin(props: LanFontCaseThinProps): React.ReactElement;
export default LanFontCaseThin;
