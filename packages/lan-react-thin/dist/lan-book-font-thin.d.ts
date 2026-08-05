import React from 'react';

export interface LanBookFontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookFontThin(props: LanBookFontThinProps): React.ReactElement;
export default LanBookFontThin;
