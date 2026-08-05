import React from 'react';

export interface LanFontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFontThin(props: LanFontThinProps): React.ReactElement;
export default LanFontThin;
